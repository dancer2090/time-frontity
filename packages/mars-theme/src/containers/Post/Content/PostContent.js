import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';
import PostTemplate from '../Templates/PostTemplate';
import VideoTemplate from '../Templates/VideoTemplate';
import PhotoListTemplate from '../Templates/PhotoListTemplate';
import PostPhotoTemplate from '../Templates/PostPhotoTemplate';

const PostContent = ({ state, scrollRef = null }) => {
  const data = state.source.get(state.router.link);

  return (
    <Switch>
      <MainTemplate scrollRef={scrollRef} when={state.router.link === '/' || state.router.link === '/uk/'} />
      <PostPhotoTemplate scrollRef={scrollRef} when={state.router.link === '/post-photo/'} />
      <CategoryTemplate scrollRef={scrollRef} when={data.isCategory === true} />
      <PostTemplate scrollRef={scrollRef} when={data.isPostType} />
      <PhotoListTemplate scrollRef={scrollRef} when={state.router.link === '/photo/'} />
    <VideoTemplate scrollRef={scrollRef} when={state.router.link === '/video/'} />
    </Switch>
  );
};

export default connect(PostContent);
