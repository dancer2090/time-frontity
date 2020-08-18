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
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const { recaptchaKey } = state.frontity;
  const data = state.source.get(state.router.link);
  const formRef = useRef(null);

  useEffect(() => {
    actions.theme.ipDetect();
  }, []);

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
        {/* Add some metatags to the <head> of the HTML. */}
        <Title />
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
        </Head>

        {/* Add some global styles for the whole site, like body or a's.
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
        <Global styles={globalStyles} />
        {/* Header components */}
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}

        <Main>
          <Switch>
            <Loader when={data.isFetching} />
            <Post scrollRef={formRef} when={state.router.link === '/' || state.router.link === '/uk/'} />
            <Post scrollRef={formRef} when={data.isPostType || data.isCategory} />
            <PageError when={data.isError} />
          </Switch>
        </Main>

        {/* Footer components */}

      </GoogleReCaptchaProvider>
    </>
  );
};

export default connect(Theme);
