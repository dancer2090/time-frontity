import React, { useRef, useEffect } from 'react';
import {
  Global, connect, Head,
} from 'frontity';
import Switch from '@frontity/components/switch';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';
import Post from './post';
import Header from '../components/Header';
import HeadTags from '../components/HeadTags';
import Loader from '../components/Loader';
import Title from '../components/title';
import Modal from '../components/Modal';
import PageError from '../components/page-error';
import { globalStyles, Main } from '../components/globalStyles';
import Recaptcha from '../components/Recaptcha';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const { recaptchaKey } = state.frontity;
  const data = state.source.get(state.router.link);
  const ldata = libraries.source.parse(state.frontity.url + state.router.link);
  const formRef = useRef(null);

  const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
      googleTagManager({
        containerId: 'GTM-5HW8S55',
      })
    ]
  });
  analytics.page();

  useEffect(() => {
    actions.theme.ipDetect();
    console.log(2);
  }, []);
  console.log(1);

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
        {/* Add some metatags to the <head> of the HTML. */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"/>
        {/* Add some global styles for the whole site, like body or a's.
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
        <Global styles={globalStyles} />
        {/* Header components */}
        <Header />
        <HeadTags />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}

        <Main>
          <Switch>
            <Loader when={data.isFetching} />
            <Post scrollRef={formRef} when={ldata.route === '/'} />
            <Post scrollRef={formRef} when={state.router.link === '/contacts/'} />
            <Post scrollRef={formRef} when={state.router.link === '/special-theme/'} />
            <Post
              scrollRef={formRef}
              when={
                data.isPostType
                || data.isCategory
                || data.isVideoArchive
                || data.isImagesArchive
                || data.type === 'page'
                || data.type === 'authors'
                || data.isPersonaArchive
              }
            />
            <Post scrollRef={formRef} when={state.router.link.includes('/tag/')} />
            <Post scrollRef={formRef} when={state.router.link.includes('/search-result/')} />
            <PageError when={data.isError} />
          </Switch>
        </Main>

        {/* Footer components */}

      </GoogleReCaptchaProvider>
    </>
  );
};

export default connect(Theme);
