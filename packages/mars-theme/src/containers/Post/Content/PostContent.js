import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';
import CategoryTemplate from '../Templates/CategoryTemplate';

const PostContent = ({ state, scrollRef = null }) => (
  <Switch>
    <MainTemplate scrollRef={scrollRef} when={state.router.link === '/'} />
    <CategoryTemplate scrollRef={scrollRef} when={state.router.link === '/category/'} />
  </Switch>
);

export default connect(PostContent);
