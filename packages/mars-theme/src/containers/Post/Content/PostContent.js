import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import PostTemplate from '../Templates/PostTemplate';
import VideoTemplate from '../Templates/VideoTemplate';

const PostContent = ({ state, scrollRef = null }) => (
  <Switch>
    <MainTemplate scrollRef={scrollRef} when={state.router.link === '/'} />
    <PostTemplate scrollRef={scrollRef} when={state.router.link === '/post/'} />
    <VideoTemplate scrollRef={scrollRef} when={state.router.link === '/video/'} />
  </Switch>
);

export default connect(PostContent);
