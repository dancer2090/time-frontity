import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';
import PostTemplate from '../Templates/PostTemplate';

const PostContent = ({ state, scrollRef = null }) => {
  const dataP = state.source.get(state.router.link);
  return (
    <Switch>
      <MainTemplate scrollRef={scrollRef} when={state.router.link === '/'} />
      <CategoryTemplate scrollRef={scrollRef} when={state.router.link === '/category/'} />
      <PostTemplate scrollRef={scrollRef} when={dataP.type === 'post'} />
    </Switch>
  );
};

export default connect(PostContent);
