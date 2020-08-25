/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import axios from 'axios';
import Theme from './containers';
import imageUrl from './processors/imageUrl';
import linkUrls from './processors/linkUrls';
import { linkReplace, linkImageReplace } from './utils/func';

const UkMainHandler = {
  name: 'UkMainHandler',
  priority: 1,
  pattern: '/(uk)?/',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.theme.isFetch && state.router.link === '/uk'){
      try {
      // Get the posts from those categories.
      const postsResponse = await libraries.source.api.get({
        endpoint: 'pages',
        params: { slug: 'main', _embed: true },
      });
      const alt_page = await libraries.source.populate({
        state,
        response: postsResponse,
      });
      alt_page[0].isHome = true;
      alt_page[0].isPage = true;
      alt_page[0].isPostType = true;
      state.theme.lang = 'uk';

      // Populate state.source.data with the proper info about this URL.
      Object.assign(state.source.data[route], alt_page[0]);
      } catch (e) {

      }
    }
  },
};

const MainHandler = {
  name: 'MainHandler',
  priority: 1,
  pattern: '/',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link === '/'){
      try {
      // Get the posts from those categories.
      const postsResponse = await libraries.source.api.get({
        endpoint: 'pages',
        params: { slug: 'main', _embed: true },
      });
      const alt_page = await libraries.source.populate({
        state,
        response: postsResponse,
      });
      alt_page[0].isHome = true;
      alt_page[0].isPage = true;
      alt_page[0].isPostType = true;
      state.theme.lang = 'ru';

      // Populate state.source.data with the proper info about this URL.
      Object.assign(state.source.data[route], alt_page[0]);
      } catch (e) {

      }
    }
  },
};

const PostHandler = {
  name: 'PostHandler',
  priority: 2,
  pattern: '/(.*)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    console.log(state.router.link);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'posts',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const UkPostHandler = {
  name: 'UkPostHandler',
  priority: 2,
  pattern: '/(uk)?/(.*)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'posts',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const CatHandler = {
  name: 'CatHandler',
  priority: 3,
  pattern: '/(.*)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    console.log(state.router.link);
    if(state.router.link !== '/'){
      try {
        const postsResponse2 = await libraries.source.api.get({
          endpoint: 'categories',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page2 = await libraries.source.populate({
          state,
          response: postsResponse2,
        });
        alt_page2[0].isArchive = true;
        alt_page2[0].isCategory = true;
        alt_page2[0].isTaxonomy = true;
        alt_page2[0].taxonomy = 'category';

        // Get the posts from those categories.
        const postsResponse3 = await libraries.source.api.get({
          endpoint: 'posts',
          params: { categories: alt_page2.id, _embed: true },
        });
        const items = await libraries.source.populate({
          state,
          response: postsResponse3,
        });
        const total = libraries.source.getTotal(postsResponse3);
        const totalPages = libraries.source.getTotalPages(postsResponse3);
        alt_page2[0].items = items;
        alt_page2[0].total = total;
        alt_page2[0].totalPages = totalPages;

        Object.assign(state.source.data[route], alt_page2[0]);
      } catch (e) {

      }
    }
  },
};

const UkCatHandler = {
  name: 'UkCatHandler',
  priority: 3,
  pattern: '/(uk)?/(.*)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse2 = await libraries.source.api.get({
          endpoint: 'categories',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page2 = await libraries.source.populate({
          state,
          response: postsResponse2,
        });
        alt_page2[0].isArchive = true;
        alt_page2[0].isCategory = true;
        alt_page2[0].isTaxonomy = true;
        alt_page2[0].taxonomy = 'category';
        state.theme.lang = 'uk';

        // Get the posts from those categories.
        const postsResponse3 = await libraries.source.api.get({
          endpoint: 'posts',
          params: { categories: alt_page2.id, _embed: true },
        });
        const items = await libraries.source.populate({
          state,
          response: postsResponse3,
        });
        const total = libraries.source.getTotal(postsResponse3);
        const totalPages = libraries.source.getTotalPages(postsResponse3);
        alt_page2[0].items = items;
        alt_page2[0].total = total;
        alt_page2[0].totalPages = totalPages;

        Object.assign(state.source.data[route], alt_page2[0]);
      } catch (e) {

      }
    }
  },
};

const PageHandler = {
  name: 'PageHandler',
  priority: 4,
  pattern: '/(.*)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    console.log(state.router.link);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'pages',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const UkPageHandler = {
  name: 'UkPageHandler',
  priority: 4,
  pattern: '/(uk)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'pages',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};


const UkVideoHandler = {
  name: 'UkVideoHandler',
  priority: 5,
  pattern: '/(uk)?/(video)?',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'video',
          params: { _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isArchive = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const VideoHandler = {
  name: 'VideoHandler',
  priority: 5,
  pattern: '/(video)?',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'video',
          params: { _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isArchive = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const UkImagesHandler = {
  name: 'UkImagesHandler',
  priority: 5,
  pattern: '/(uk)?/(images)?',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'images',
          params: { _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isArchive = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const ImagesHandler = {
  name: 'ImagesHandler',
  priority: 5,
  pattern: '/(images)?',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'images',
          params: { _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isArchive = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const UkPersonaHandler = {
  name: 'UkPersonaHandler',
  priority: 5,
  pattern: '/(uk)?/(persona)?',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'persona',
          params: { _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isArchive = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const PersonaHandler = {
  name: 'PersonaHandler',
  priority: 5,
  pattern: '/(persona)?',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'persona',
          params: { _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isArchive = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const UkVideoPostHandler = {
  name: 'UkVideoPostHandler',
  priority: 6,
  pattern: '/(uk)?/(video)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'video',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const VideoPostHandler = {
  name: 'VideoPostHandler',
  priority: 6,
  pattern: '/(video)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'video',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const UkImagesPostHandler = {
  name: 'UkImagesPostHandler',
  priority: 6,
  pattern: '/(uk)?/(images)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'images',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const ImagesPostHandler = {
  name: 'ImagesPostHandler',
  priority: 6,
  pattern: '/(images)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'images',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const UkPersonaPostHandler = {
  name: 'UkPersonaPostHandler',
  priority: 6,
  pattern: '/(uk)?/(persona)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'persona',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'uk';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};

const PersonaPostHandler = {
  name: 'PersonaPostHandler',
  priority: 6,
  pattern: '/(persona)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log(route);
    if(state.router.link !== '/'){
      try {
        const postsResponse4 = await libraries.source.api.get({
          endpoint: 'persona',
          params: { slug: params.slug, _embed: true },
        });
        const alt_page4 = await libraries.source.populate({
          state,
          response: postsResponse4,
        });
        alt_page4[0].isPostType = true;
        alt_page4[0].isPost = true;
        state.theme.lang = 'ru';
        Object.assign(state.source.data[route], alt_page4[0]);
      } catch (e) {

      }
    }
  },
};


const marsTheme = {
  name: '@frontity/mars-theme',
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    customSettings: {
      actualNumberPage: 2,
      lastNumberPage: 2,
      categoryPage: 2,
      urlsWithLocal: {},
      categories: {},
      isSubscribeSend: false,
      isFormSend: false,
      isCommentSend: false,
      sendFormGuide: false,
      isThanksOpen: true,
      actualLoadMore: false,
      lastLoadMore: false,
      categoryLoadMore: false,
      doLoader: false,
    },
    theme: {
      menu: {},
      cases: {},
      teammembers: {},
      recaptchaToken: null,
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      getMain: ({ state }) => async () => {
        state.customSettings.doLoader = true;
        await axios.get(`${state.source.api}/frontity-api/get-main`).then((response) => {
          const main = response.data;
          Object.assign(state.source.data[state.router.link], main);
          state.customSettings.doLoader = false;
        });
      },
      getCategory: ({ state }) => async (id) => {
        const { data } = await axios.get(`${state.source.api}/frontity-api/get-category/${id}`);
        Object.assign(state.source.data[state.router.link], data);
      },
      addViewPost: ({ state }) => async (id) => {
        await axios.get(`${state.source.api}/frontity-api/add-view/${id}`);
      },
      loadCategoryPost: ({ state, actions }) => async () => {
        const linksCategory = state.router.link.split('/');
        if (linksCategory.length === 4 || linksCategory.length === 5) {
          let categoryPost = linksCategory[1];
          if (state.theme.lang === 'uk') {
            categoryPost = linksCategory[2];
          }
          await actions.source.fetch(`/${categoryPost}/`);
        }
      },
      ipDetect: ({ state }) => async () => {
        const res = await axios.get(`https://api.sypexgeo.net/json/${state.frontity.ip}`);
        if (res.data) {
          const { data } = res;
          const countriesLock = ['IN', 'PK', 'BD'];
          const { country = {} } = data;
          const { iso = '' } = country || {};
          if (countriesLock.indexOf(iso) !== -1) {
            window.location.href = 'https://google.com';
          }
        }
      },
      alternativeUrlForImage: ({ state }) => () => {
        const urls = {
          urlFrom: state.frontity.adminUrl,
          urlTo: state.frontity.url,
          isLocal: state.frontity.isLocal,
        };
        state.customSettings.urlsWithLocal = urls;
      },
      setRecaptchaToken: ({ state }) => (token) => {
        state.theme.recaptchaToken = token;
      },
      loadMore: ({ state }) => async () => {
        state.customSettings.pageNumber += 1;
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      changeSubscribeSend: ({ state }) => {
        state.customSettings.isSubscribeSend = !state.customSettings.isSubscribeSend;
      },
      sendComment: ({ state }) => async (data) => {
        const dataForm = data.formData;
        // dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        state.customSettings.isCommentSend = true;
        await axios.post(
          `${state.source.api}/frontity-api/send-comment`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {
          if (response.status === 200) {
            state.customSettings.isCommentSend = false;
          }

          return response;
        });
      },

      sendSubscribe: ({ state }) => async (data) => {
        const dataForm = data;
        // dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        return axios.post(
          `${state.source.api}/frontity-api/send-subscribe`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {
          if (response.status === 200) {
            state.customSettings.isCommentSend = false;
          }

          return response;
        });
      },
      beforeSSR: async ({ state, actions, libraries }) => {
        const globalOptions = await axios.get(`${state.source.api}/acf/v3/options/options`);
        const optionPage = globalOptions.data || {};

        state.theme.options = optionPage;
        actions.theme.alternativeUrlForImage();
        if (
          state.router.link === '/'
          || state.router.link === '/uk/'
        ) {
          const mainData = await axios.get(`${state.source.api}/frontity-api/get-main`);
          const main = mainData.data;
          Object.assign(state.source.data[state.router.link], main);
        }

        await actions.theme.loadCategoryPost();
      },
    },
  },
  libraries: {
    func: {
      urlCheck: linkReplace,
      imageUrlCheck: linkImageReplace,
    },
    source: {
      handlers: [UkMainHandler, MainHandler, PostHandler, UkPostHandler, PageHandler, UkPageHandler, UkVideoHandler, VideoHandler, UkImagesHandler, ImagesHandler],
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe, imageUrl, linkUrls],
    },
  },
};

export default marsTheme;
