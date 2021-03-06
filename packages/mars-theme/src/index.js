/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import image from '@frontity/html2react/processors/image';
import convert from 'xml-js';
import iframe from '@frontity/html2react/processors/iframe';
import axios from 'axios';
import Theme from './containers';
import imageUrl from './processors/imageUrl';
import linkUrls from './processors/linkUrls';
import { linkReplace, linkImageReplace, linkSeoReplacer, cutStr } from './utils/func';

const newHandler = {
  name: 'categoryOrPostType',
  priority: 19,
  pattern: '/:type/(.*)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    // 1. try with category.
    const error = [];
    try {
      // Get the id of the parent category.
      const parentCatResponse = await libraries.source.api.get({
        endpoint: 'categories',
        params: { slug: params.slug },
      });

      const [parentCat] = await libraries.source.populate({
        state,
        response: parentCatResponse,
      });

      Object.assign(state.source.data[route], {
        id: parentCat.id,
        taxonomy: 'category',
        isArchive: true,
        isTaxonomy: true,
        isCategory: true,
      });
      /*
      const category = libraries.source.handlers.find(
        (handler) => handler.name === 'category',
      );
      await category.func({
        route, params, state, libraries,
      });
      */
    } catch (e) {
      error.push('not-cat');
    }
    if(error && error.length > 0){
      try {
        let hand_name = 'post type';

        if (params.type === 'video') {
          hand_name = 'video';
        }
  
        const postType = libraries.source.handlers.find(
          (handler) => handler.name === hand_name,
        );
  
        await postType.func({
          link: route, params, state, libraries,
        });
      }
      catch {
           
      }
    }
  },
};

const MainHandler = {
  name: 'MainHandler',
  priority: 19,
  pattern: '/',
  func: async ({
    route, params, state, libraries,
  }) => {
    Object.assign(state.source.data[route], {
      id: 5,
      isFetching: false,
      isHome: true,
      isPage: true,
      isPostType: true,
      isReady: true,
      link: "/",
      page: 1,
      route: "/",
      type: "page",
    });
  },
};

const newHandler2 = {
  name: 'categoryOrPostType2',
  priority: 19,
  pattern: '/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
    // 1. try with category.
    const error = [];
    try {
      // Get the id of the parent category.
      const parentCatResponse = await libraries.source.api.get({
        endpoint: 'categories',
        params: { slug: params.slug },
      });

      const [parentCat] = await libraries.source.populate({
        state,
        response: parentCatResponse,
      });

      Object.assign(state.source.data[route], {
        id: parentCat.id,
        taxonomy: 'category',
        isArchive: true,
        isTaxonomy: true,
        isCategory: true,
      });
      /*
      const category = libraries.source.handlers.find(
        (handler) => handler.name === 'category',
      );
      await category.func({
        route, params, state, libraries,
      });
      */
    } catch (e) {
      // It's not a category
      const hand_name = 'post type';
      const postType = libraries.source.handlers.find(
        (handler) => handler.name === hand_name,
      );
      await postType.func({
        link: route, params, state, libraries,
      });
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
      videoPage: 2,
      searchPage: 1,
      photoPage: 1,
      personPage: 2,
      authorPage: 1,
      tagPage: 1,
      censorNewsLength: 0,
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
      loadMorePhoto: false,
      searchLoadMore: false,
      loadMorePerson: false,
      searchInitialLoader: 0,
      doLoader: false,
    },
    theme: {
      rss: {},
      menu: {},
      cases: {},
      postTags: [],
      authors: {},
      teammembers: {},
      recaptchaToken: null,
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      searchResult: {},
      isLoading: false
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      getMain: ({ state, actions }) => async () => {
        state.customSettings.doLoader = true;
        if(state.source.data[state.router.link] && state.source.data[state.router.link].last && state.source.data[state.router.link]['last'].length > 0){
          state.customSettings.doLoader = false;
        } else {
          await axios.get(`${state.source.api}/frontity-api/get-main`).then((response) => {
            const main = response.data;
            Object.assign(state.source.data[state.router.link], main);
            state.customSettings.doLoader = false;
          });
        }
      }, 
      getCategory: ({ state }) => async (id, ctx = {}) => {
        const { data } = await axios.get(`${state.source.api}/frontity-api/get-category/${id}`);
        Object.assign(state.source.data[state.router.link], data);
        return new Promise((resolve) => {
          resolve('ok');
        });
      },
      getTags: ({ state }) => async (id) => {
        const { data } = await axios.get(`${state.source.api}/frontity-api/get-tags/${id}`);
        state.theme.postTags = data.tags;
        return new Promise((resolve) => {
          resolve('ok');
        });
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
      loadSearch: ({ state }) => async (searchValue) => {
        const { data } = await axios.get(`${state.source.api}/frontity-api/get-search/page/${state.customSettings.searchPage}`, {
          params: {
            s: searchValue,
          },
        });
        state.theme.searchResult = data;
        state.customSettings.searchInitialLoader = data.search.length;
        return new Promise((resolve) => {
          resolve('ok');
        });
      },
      getDataPersonLoad: ({ state }) => async (ctxGetPersona) => {
        const personaData = ctxGetPersona ? ctxGetPersona : await axios.get(`${state.source.api}/frontity-api/get-persona/`);
        Object.assign(state.source.data[state.router.link], personaData.data);
      },
      loadNewsIntegration: ({ state }) => async () => {
        const { lang = 'ru' } = state.theme;
        let rss = {};
        if(state.theme.rss && state.theme.rss[lang] && state.theme.rss[lang]['data']){
          rss = state.theme.rss[lang]['data'];
        } else {
          try {
            const result = await axios.get(`https://censor.net.ua/includes/news_${lang}.xml`);
            const resultParse = convert.xml2js(result.data, { compact: true, spaces: 4 });
            rss = resultParse.rss;
          } catch (ex) {
            //console.log(ex);
          }
        }

        const { channel = {} } = rss;
        const { item = [] } = channel;

        const resultArrayNews = [];
        const filterCategories = [
          'Політика України',
          'Политика Украины',
          'Проишествия',
          'Події',
          'Економіка',
          'Экономика',
        ];
        item.forEach((item) => {
          if (item && filterCategories.indexOf(item.category._text) !== -1) {
            const date = new Date(item.pubDate._text);
            const resultDate = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} ${(date.getHours() < 10 ? `0${date.getHours()}` : date.getHours())}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
            resultArrayNews.push({
              ...item,
              link: item.link._text,
              date: resultDate,
              acf: {
                [lang]: {
                  title: item.title._cdata,
                },
              },
              _embedded: {
                category: {
                  acf: {
                    [lang]: {
                      title: item.category._text,
                    },
                  },
                },
                featured_image: {
                  url: false,//item.enclosure._attributes.url,
                },
              },
            });
          }
        });
        const resultArray = resultArrayNews;
        if (state.source.data[state.router.link].last !== undefined) {
          resultArray.push(...state.source.data[state.router.link].last);
        }
        Object.assign(state.source.data[state.router.link], {
          ...state.source.data[state.router.link],
          last: resultArray,
        });
        state.customSettings.censorNewsLength = resultArrayNews.length;
        state.theme.cases = resultArray;
        return new Promise((resolve, reject) => {
          resolve('data');
        });
      },
      beforeSSR: ({ state, actions, libraries }) => async ({ ctx }) => {
        const url = ctx.href;
        const { state : ctxState = {} } = ctx;
        const {
          posts : ctxPosts = [],
          options : ctxOptions = {},
          categories : ctxCategories = [],
          getMain = {},
          getPersona : ctxGetPersona = [],
          censor : ctxCensor = {},
          getCategory : ctxGetCategory = {},
          getTags : ctxGetTags = []
        } = ctxState;

        const ldata = libraries.source.parse(state.frontity.url + state.router.link);

        if (ldata.query && ldata.query.lang) {
          state.theme.lang = ldata.query.lang !== 'uk' && ldata.query.lang !== 'ru' ? 'ru' : ldata.query.lang;
        }
        if(ctxCensor && ctxCensor[state.theme.lang] && ctxCensor[state.theme.lang]['data']) state.theme.rss = ctxCensor;
        const globalOptions = ctxOptions && ctxOptions.data ? await ctxOptions : await axios.get(`${state.source.api}/acf/v3/options/options`);
        const optionPage = globalOptions.data || {};
        state.theme.options = optionPage;
        actions.theme.alternativeUrlForImage();
        if (
          ldata.route === '/'
        ) {
          const mainData = getMain ? getMain : await axios.get(`${state.source.api}/frontity-api/get-main`);
          const main = mainData.data;
          Object.assign(state.source.data[state.router.link], main);
        }
        if(ctxGetCategory && ctxGetCategory.data){
          Object.assign(state.source.data[state.router.link], ctxGetCategory.data);
        }
        if(ctxGetTags && ctxGetTags.data && ctxGetTags.data.tags){
          state.theme.postTags = ctxGetTags.data.tags;
        }

        if (state.router.link.includes('search-result')) {
          const urlData = libraries.source.parse(state.frontity.url + state.router.link);
          const querySearch = decodeURI(urlData.query.s);
          actions.theme.loadSearch(querySearch);
        }
        await actions.theme.loadNewsIntegration();

        if (state.router.link.includes('persona')) {
          await actions.theme.getDataPersonLoad(ctxGetPersona);
        }
        if (state.router.link.includes('authors') || state.router.link.includes('tag')) {
          state.source.data[state.router.link].timeline = [];
        }

        await actions.theme.loadCategoryPost();
      },
    },
  },
  libraries: {
    func: {
      urlCheck: linkReplace,
      imageUrlCheck: linkImageReplace,
      urlSeoCheck: linkSeoReplacer,
      cutStr: cutStr,
    },
    source: {
      handlers: [
        newHandler, newHandler2, MainHandler /* UkMainHandler/*, MainHandler,
        UkImagesHandler, ImagesHandler, UkVideoHandler, VideoHandler,
        UkVideoPostHandler, VideoPostHandler, UkImagesPostHandler, ImagesPostHandler,
        UkPersonaHandler, PersonaHandler, UkPersonaPostHandler, PersonaPostHandler,
        CatHandler, UkCatHandler, PostHandler, UkPostHandler, PageHandler, UkPageHandler, */
      ],
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
