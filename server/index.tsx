import Koa from "koa";
import { get } from "koa-route";
import serve from "koa-static";
import mount from "koa-mount";
import React from "react";
import htmlescape from "htmlescape";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { FilledContext } from "react-helmet-async";
import { getSettings } from "@frontity/file-settings";
import { Context } from "@frontity/types";
import { getSnapshot } from "@frontity/connect";
import { ChunkExtractor } from "@loadable/server";
import getTemplate from "./templates";
import {
  getStats,
  hasEntryPoint,
  getBothScriptTags,
  Extractor,
} from "./utils/stats";
import getHeadTags from "./utils/head";
import App from "../app";
import { FrontityTags } from "../../types";
import createStore from "./store";
import { exists, promises as fs } from "fs";
import { promisify } from "util";
import compress from "koa-compress";

export default ({ packages }): ReturnType<Koa["callback"]> => {
  const app = new Koa();
  app.proxy = true;
  app.use(compress({
    filter (content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    }
  }))
  // Serve static files.
  app.use(async (ctx, next) => {
    const moduleStats = await getStats({ target: "module" });
    const es5Stats = await getStats({ target: "es5" });
    const stats = moduleStats || es5Stats;

    const publicPath = stats
      ? // Remove domain from publicPath.
        stats.publicPath.replace(/^(?:https?:)?\/\/([^/])+/, "")
      : // Use the value by default.
        "/static";

    // Serve the static files.
    return mount(publicPath, serve("build/static"))(ctx, next);
  });
  // added static files for the wordpress urls
  app.use(mount('/wp-content/uploads', serve("../admin.timeua.info/wp-content/uploads")))
  // Serve robots.txt from root or default if it doesn't exists.
  app.use(
    get("/robots.txt", async (ctx, next) => {
      if (await promisify(exists)("./robots.txt")) {
        await serve("./")(ctx, next);
      } else {
        ctx.type = "text/plain";
        ctx.body = "User-agent: *\nAllow: /";
      }
    })
  );

  app.use(
    get("/sitemap.xml", async (ctx, next) => {
      if (await promisify(exists)("../admin.timeua.info/sitemap.xml")) {
        await serve("../admin.timeua.info/")(ctx, next);
      } else {
        ctx.type = "text/plain";
        ctx.body = "User-agent: *\nAllow: /";
      }
    })
  );

  // Ignore HMR if not in dev mode or old browser open.
  const return404 = (ctx: Context) => {
    ctx.status = 404;
  };

  app.use(get("/__webpack_hmr", return404));
  app.use(get("/static/([a-z0-9]+\\.hot-update\\.json)", return404));

  // Return Frontity favicon for favicon.ico.
  app.use(get("/favicon.ico", serve("./")));

  // Frontity server rendering.
  app.use(async (ctx, next) => {
    ctx.compress = true;
    const url = ctx.url.split('?');
    let newUrl = url[0];
    const lang = ctx.query && ctx.query.lang ? ctx.query.lang : 'ru';

    const data = {
      censor : {},
      options : {},
      getMain : {},
      persona : {}
    };
    data.censor = fs.readFile("api/public/res-json/censor/"+lang+".json", "utf8");
    data.options = fs.readFile("api/public/res-json/options/index.json", "utf8");
    data.getMain = newUrl === '/' ? fs.readFile("api/public/res-json/get-main/index.json", "utf8") : '';
    data.persona = newUrl.includes('persona') ? fs.readFile("api/public/res-json/get-persona/index.json", "utf8") : '';
    // Get module chunk stats.
    const moduleStats = await getStats({ target: "module" });
    // Get es5 chunk stats.
    const es5Stats = await getStats({ target: "es5" });
    // If present, module is the main chunk. This means that we can only
    // use es5 for HMR if module is not present.
    const stats = moduleStats || es5Stats;

    // Get settings.
    const settings = await getSettings({ url: ctx.href, name: ctx.query.name });

    // Get the correct template or html if none is found.
    const template = getTemplate({ mode: settings.mode });

    // Init variables.
    let html = "";
    const frontity: FrontityTags = {};

    // Create the store.
    const store = createStore({ settings, packages, url: ctx.URL });
    // const ip = ctx.req.connection.remoteAddress;
    const current_ip = ctx.ips.length > 0 ? ctx.ips[ctx.ips.length - 1] : ctx.ip;
    store.state.frontity.ip = current_ip;

    const [
      censor,
      options,
      getMain,
      persona
    ] = await Promise.all(
      Object.values(data)
    );
    if(censor && censor !== ''){
      ctx.state.censor = {};
      ctx.state.censor[lang] = {data : JSON.parse(censor)};
    }
    if(options && options !== '') ctx.state.options = {data : JSON.parse(options)};
    if(getMain && getMain !== '') ctx.state.getMain = {data : JSON.parse(getMain)};
    if(persona && persona !== '') ctx.state.getPersona = {data : JSON.parse(persona)};

    // Run init actions.
    await Promise.all(
      Object.values(store.actions).map(({ init }) => {
        if (init) return init();
      })
    );

    // Run beforeSSR actions.
    await Promise.all(
      Object.values(store.actions).map(({ beforeSSR }) => {
        if (beforeSSR) return beforeSSR({ ctx });
      })
    );

    // Pass a context to HelmetProvider which will hold our state specific to each request.
    const helmetContext = {} as FilledContext;

    const Component = <App store={store} helmetContext={helmetContext} />;

    // If there's no client stats or there is no client entrypoint for the site we
    // want to load, we don't extract scripts.
    if (stats && hasEntryPoint({ stats, site: settings.name })) {
      // Run renderToString with ChunkExtractor to get the html.
      const extractor = new ChunkExtractor({
        stats,
        entrypoints: [settings.name],
      });
      const jsx = extractor.collectChunks(Component);
      html = renderToString(jsx);

      // Get the linkTags. Crossorigin needed for type="module".
      const crossorigin = moduleStats && es5Stats ? { crossorigin: "" } : {};
      frontity.link = extractor.getLinkTags(crossorigin);

      // If we have both module and es5, do the type="module" dance:
      // https://jakearchibald.com/2017/es-modules-in-browsers/
      //
      // @ts-ignore – Ignore Typescript until we have a proper public API:
      // https://github.com/smooth-code/loadable-components/pull/239#issuecomment-482501467
      const customExtractor = extractor as Extractor;
      frontity.script =
        moduleStats && es5Stats
          ? getBothScriptTags({
              extractor: customExtractor,
              moduleStats,
              es5Stats,
            })
          : extractor.getScriptTags();

      // Add mutations to our scripts.
      frontity.script = `<script id="__FRONTITY_CONNECT_STATE__" type="application/json">${htmlescape(
        getSnapshot(store.state)
      )}</script>\n${frontity.script}`;
    } else {
      // No client chunks: no scripts. Just do SSR. Use renderToStaticMarkup
      // because no hydratation will happen in the client.
      html = renderToStaticMarkup(Component);
    }

    // Get static head strings.
    const head = getHeadTags(helmetContext.helmet);

    // Write the template to body.
    ctx.body = template({ html, frontity, head });
    next();

    // Run afterSSR actions.
    Object.values(store.actions).forEach(({ afterSSR }) => {
      if (afterSSR) afterSSR();
    });
  });

  return app.callback();
};