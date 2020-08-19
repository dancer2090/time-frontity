import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';
import PostTemplate from '../Templates/PostTemplate';
import ResultSearchTemplate from '../Templates/ResultSearchTemplate';

const PostContent = ({ state, scrollRef = null }) => {
  const data = state.source.get(state.router.link);

  return (
    <Switch>
      <MainTemplate scrollRef={scrollRef} when={state.router.link === '/' || state.router.link === '/uk/'} />
      <ResultSearchTemplate scrollRef={scrollRef} when={state.router.link.includes('/search-result/')} />
      <CategoryTemplate scrollRef={scrollRef} when={data.isCategory === true} />
      <PostTemplate scrollRef={scrollRef} when={data.isPostType} />
    </Switch>
  );
};

export default connect(PostContent);
