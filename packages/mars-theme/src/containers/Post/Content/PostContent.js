import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';
import PostTemplate from '../Templates/PostTemplate';
import ContactsTemplate from '../Templates/ContactsTemplate';

const PostContent = ({ state, scrollRef = null }) => {
  const data = state.source.get(state.router.link);

  return (
    <Switch>
      <MainTemplate scrollRef={scrollRef} when={state.router.link === '/' || state.router.link === '/uk/'} />
      <ContactsTemplate scrollRef={scrollRef} when={state.router.link === '/contacts/'} />
      <CategoryTemplate scrollRef={scrollRef} when={data.isCategory === true} />
      <PostTemplate scrollRef={scrollRef} when={data.isPostType} />
    </Switch>
  );
};

export default connect(PostContent);
