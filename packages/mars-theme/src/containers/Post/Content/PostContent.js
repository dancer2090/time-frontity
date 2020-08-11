import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';
import PostTemplate from '../Templates/PostTemplate';
import PhotoListTemplate from '../Templates/PhotoListTemplate';

const PostContent = ({ state, scrollRef = null }) => (
  <Switch>
    <MainTemplate scrollRef={scrollRef} when={state.router.link === '/'} />
    <CategoryTemplate scrollRef={scrollRef} when={state.router.link === '/category/'} />
    <PostTemplate scrollRef={scrollRef} when={state.router.link === '/post/'} />
    <PhotoListTemplate scrollRef={scrollRef} when={state.router.link === '/photo/'} />
  </Switch>
);

export default connect(PostContent);
