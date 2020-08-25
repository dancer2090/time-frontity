/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import axios from 'axios';
import Theme from './containers';
import imageUrl from './processors/imageUrl';
import linkUrls from './processors/linkUrls';
import { linkReplace, linkImageReplace, linkSeoReplacer } from './utils/func';

const UkMainHandler = {
  name: 'UkMainHandler',
  priority: 1,
  pattern: '/(uk)?/',
  func: async ({
    route, params, state, libraries,
  }) => {
    console.log('ukmain-------------');
    console.log(state.router.link);
    if(state.router.link === '/uk/'){
      console.log('uk check');
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
    else {
      const l = libraries.source.parse(state.router.link);
      const lPath = l.path.split('/').filter((item, n) => n>1);
      console.log(lPath);
      const slug = lPath[0];
      let checkError = false;
      console.log(slug);
      console.log(route);
      console.log(state.router.link);
      if (slug !== 'css2') {
//        try{
          console.log(1);

          const postsResponse2 = await libraries.source.api.get({
            endpoint: 'categories',
            params: { slug: slug, _embed: true },
          });
          const alt_page2 = await libraries.source.populate({
            state,
            response: postsResponse2,
          });
          if (alt_page2.length > 0) {
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
            console.log(alt_page2);
            Object.assign(state.source.data[route], alt_page2[0]);
          }

          
//        } catch(e){
//          checkError = true;
//        }
        if(checkError){
          try{
            console.log(2);
            const postsResponse4 = await libraries.source.api.get({
              endpoint: 'posts',
              params: { slug: slug, _embed: true },
            });
            const alt_page4 = await libraries.source.populate({
              state,
              response: postsResponse4,
            });
            if (alt_page4.length > 0) {
              alt_page4[0].isPostType = true;
              alt_page4[0].isPost = true;
              state.theme.lang = 'uk';
              Object.assign(state.source.data[route], alt_page4[0]);
            }
          } catch(e){
            checkError = true;
          }
        }
      }
      console.log('uk page check');
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
      searchInitialLoader: 0,
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
      searchResult: {},
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
      loadSearch: ({ state }) => async (searchValue) => {
        const { data } = await axios.get(`${state.source.api}/frontity-api/get-search/page/${state.customSettings.searchPage}`, {
          params: {
            s: searchValue,
          },
        });
        state.theme.searchResult = data;
        state.customSettings.searchInitialLoader = data.search.length;
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

        if (state.router.link === '/search-result/') {
          actions.theme.loadSearch();
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
    },
    source: {
      handlers: [
        UkMainHandler/*, MainHandler,
        UkImagesHandler, ImagesHandler, UkVideoHandler, VideoHandler,
        UkVideoPostHandler, VideoPostHandler, UkImagesPostHandler, ImagesPostHandler,
        UkPersonaHandler, PersonaHandler, UkPersonaPostHandler, PersonaPostHandler,
        CatHandler, UkCatHandler, PostHandler, UkPostHandler, PageHandler, UkPageHandler,*/
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
