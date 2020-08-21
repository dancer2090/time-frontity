import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';
import PostTemplate from '../Templates/PostTemplate';
import ResultSearchTemplate from '../Templates/ResultSearchTemplate';
import PersonTemplate from '../Templates/PersonTemplate';
import VideoTemplate from '../Templates/VideoTemplate';
import PhotoListTemplate from '../Templates/PhotoListTemplate';
import PostPhotoTemplate from '../Templates/PostPhotoTemplate';

const PostContent = ({ state, scrollRef = null }) => {
  const data = state.source.get(state.router.link);
  console.log('post content data ', data);

  return (
    <Switch>
      <MainTemplate scrollRef={scrollRef} when={state.router.link === '/' || state.router.link === '/uk/'} />
      <VideoTemplate scrollRef={scrollRef} when={data.isVideoArchive && data.type === 'video'} />
      <ResultSearchTemplate scrollRef={scrollRef} when={state.router.link.includes('/search-result/')} />
      <CategoryTemplate scrollRef={scrollRef} when={data.isCategory === true} />
      <PhotoListTemplate scrollRef={scrollRef} when={data.isImagesArchive} />
      <PostPhotoTemplate scrollRef={scrollRef} when={data.type === 'images'} />
      <PostTemplate scrollRef={scrollRef} when={data.isPostType} />
      <PersonTemplate scrollRef={scrollRef} when={state.router.link === '/person/'} />
    </Switch>
  );
};

export default connect(PostContent);
