import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';
import PostTemplate from '../Templates/PostTemplate';
import ContactsTemplate from '../Templates/ContactsTemplate';
import MediaCenterTemplate from '../Templates/MediaCenterTemplate';
import SpecialThemeTemplate from '../Templates/SpecialThemeTemplate';
import ResultSearchTemplate from '../Templates/ResultSearchTemplate';
import PersonTemplate from '../Templates/PersonTemplate';
import VideoTemplate from '../Templates/VideoTemplate';
import PhotoListTemplate from '../Templates/PhotoListTemplate';
import PostPhotoTemplate from '../Templates/PostPhotoTemplate';
import AuthorsTemplate from '../Templates/AuthorsTemplate';
import TagTemplate from '../Templates/TagTemplate';
import PageTemplate from '../Templates/PageTemplate';

const PostContent = ({ state, scrollRef = null, libraries }) => {
  const data = state.source.get(state.router.link);
  const ldata = libraries.source.parse(state.frontity.url + state.router.link);
  console.log(state);
  console.log(data);

  return (
    <Switch>
      <MainTemplate scrollRef={scrollRef} when={state.router.link === '/' || state.router.link === '/uk/'} />
      <ContactsTemplate scrollRef={scrollRef} when={state.router.link === '/contacts/'} />
      <SpecialThemeTemplate scrollRef={scrollRef} when={state.router.link === '/special-theme/'} />
      <VideoTemplate scrollRef={scrollRef} when={data.isVideoArchive && data.type === 'video'} />
      <ResultSearchTemplate scrollRef={scrollRef} when={state.router.link.includes('/search-result/')} />
      <CategoryTemplate scrollRef={scrollRef} when={data.isCategory === true} />
      <PhotoListTemplate scrollRef={scrollRef} when={data.isImagesArchive} />
      <PostPhotoTemplate scrollRef={scrollRef} when={data.type === 'images'} />
      <MediaCenterTemplate scrollRef={scrollRef} when={data.type === 'page' && state.router.link.includes('media-center')} />
      <PageTemplate scrollRef={scrollRef} when={data.isPage} />
      <AuthorsTemplate scrollRef={scrollRef} when={data.type === 'authors'} />
      <TagTemplate scrollRef={scrollRef} when={state.router.link.includes('/tag/')} />
      <PostTemplate scrollRef={scrollRef} when={data.isPostType} />
      <PersonTemplate scrollRef={scrollRef} when={data.isPersonaArchive} />
    </Switch>
  );
};

export default connect(PostContent);
