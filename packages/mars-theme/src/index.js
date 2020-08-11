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

const newHandler = {
  name: "categoryOrPostType",
  priority: 19,
  pattern: "/(.*)?/:slug", 
  func: async ({ route, params, state, libraries }) => {
    // 1. try with category.
    try {
      const category = libraries.source.handlers.find(
        handler => handler.name == "category"
      );
      await category.func({ route, params, state, libraries });
    } catch (e) {
      // It's not a category
      const postType = libraries.source.handlers.find(
        handler => handler.name == "post type"
      );
      await postType.func({ link: route, params, state, libraries });
    }
  }
};

const UkMainHandler = {
  name: 'UkMainHandler',
  priority: 19,
  pattern: '/uk/',
  func: async ({
    route, params, state, libraries,
  }) => {
      // Get the posts from those categories.
      const postsResponse = await libraries.source.api.get({
        endpoint: "pages",
        params: { slug: 'main', _embed: true }
      });
      const alt_page = await libraries.source.populate({
        state,
        response: postsResponse
      });
      alt_page[0].isHome = true;
      alt_page[0].isPage = true;
      alt_page[0].isPostType = true;
      state.theme.lang = "uk";
      //const total = libraries.source.getTotal(postsResponse);
      //const totalPages = libraries.source.getTotalPages(postsResponse);

      // Populate state.source.data with the proper info about this URL.
      Object.assign(state.source.data[route], alt_page[0]);
  },
};

const UkMainHandler2 = {
  name: 'UkMainHandler2',
  priority: 19,
  pattern: '/uk/(.*)?/:slug',
  func: async ({
    route, params, state, libraries,
  }) => {
      if(params.slug!=='css2'){
        state.theme.lang = "uk";
        //Check page
        const postsResponse = await libraries.source.api.get({
          endpoint: "pages",
          params: { slug: params.slug, _embed: true }
        });
        const alt_page = await libraries.source.populate({
          state,
          response: postsResponse
        });
        if(alt_page.length>0){
          alt_page[0].isPage = true;
          alt_page[0].isPostType = true;
          Object.assign(state.source.data[route], alt_page[0]);
        } else {
          //Check category
          const postsResponse2 = await libraries.source.api.get({
            endpoint: "categories",
            params: { slug: params.slug, _embed: true }
          });
          const alt_page2 = await libraries.source.populate({
            state,
            response: postsResponse2
          });
          if(alt_page2.length>0){
            alt_page2[0].isArchive = true;
            alt_page2[0].isCategory = true;
            alt_page2[0].isTaxonomy = true;
            alt_page2[0].taxonomy =  "category";

            // Get the posts from those categories.
            const postsResponse3 = await libraries.source.api.get({
              endpoint: "posts",
              params: { categories: alt_page2.id, _embed: true }
            });
            const items = await libraries.source.populate({
              state,
              response: postsResponse3
            });
            const total = libraries.source.getTotal(postsResponse3);
            const totalPages = libraries.source.getTotalPages(postsResponse3);
            alt_page2[0].items =  items;
            alt_page2[0].total =  total;
            alt_page2[0].totalPages =  totalPages;

            Object.assign(state.source.data[route], alt_page2[0]);
          } else {
            //Check post
            const postsResponse4 = await libraries.source.api.get({
              endpoint: "posts",
              params: { slug: params.slug, _embed: true }
            });
            const alt_page4 = await libraries.source.populate({
              state,
              response: postsResponse4
            });
            alt_page4[0].isPostType = true;
            alt_page4[0].isPost = true;
            Object.assign(state.source.data[route], alt_page4[0]);
          }
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
      pageNumber: 2,
      urlsWithLocal: {},
      categories: {},
      isSubscribeSend: false,
      isFormSend: false,
      isCommentSend: false,
      sendFormGuide: false,
      isThanksOpen: true,
      blogLoadMore: false,
    },
    theme: {
      menu: {},
      cases: {},
      teammembers: {},
      faq: {},
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
      changeFormSend: ({ state }) => {
        state.customSettings.isFormSend = !state.customSettings.isFormSend;
      },
      changeSubscribeSend: ({ state }) => {
        state.customSettings.isSubscribeSend = !state.customSettings.isSubscribeSend;
      },
      changeFormGuide: ({ state }) => {
        state.customSettings.sendFormGuide = !state.customSettings.sendFormGuide;
      },
      sendForm: ({ state }) => async (data) => {
        const dataForm = data.formData;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        await axios.post(
          `${state.source.api}/frontity-api/send-form`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {
          state.customSettings.isFormSend = true;
          gtag('event', 'Send Email from footer form', {
            'event_category': 'Send Email from footer form',
          });
          if (__insp) {
            __insp.push(['identify', dataForm.get('email')]);
            __insp.push(['tagSession', {
              email: dataForm.get('email'),
              name: dataForm.get('name'),
              company: dataForm.get('company'),
            }]);
          }
        });
      },
      sendFormGuide: ({ state }) => async (data) => {
        const dataForm = data;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        await axios.post(
          `${state.source.api}/frontity-api/sendbookdata`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {

        });

        state.customSettings.sendFormGuide = true;
      },
      sendComment: ({ state }) => async (data) => {
        const dataForm = data.formData;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        state.customSettings.isCommentSend = true;
        await axios.post(
          `${state.source.api}/frontity-api/send-comment`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {
          if (response.status === 200) {
            state.customSettings.isCommentSend = false;
          }
        });
      },

      sendSubscribe: ({ state }) => async (data) => {
        const dataForm = data;
        dataForm.append('recaptchaToken', state.theme.recaptchaToken);
        await axios.post(
          `${state.source.api}/frontity-api/send-subscribe`,
          dataForm,
          { headers: { 'content-type': 'application/json' } },
        ).then((response) => {
          if (response.status === 200) {
            state.customSettings.isSubscribeSend = true;
          }
        });
      },
      beforeSSR: ({ state, actions, libraries }) => {
      },
    },
  },
  libraries: {
    func: {
      urlCheck: linkReplace,
      imageUrlCheck: linkImageReplace,
    },
    source: {
      handlers: [UkMainHandler, UkMainHandler2, newHandler],
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
