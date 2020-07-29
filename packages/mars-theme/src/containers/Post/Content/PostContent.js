import React from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import MainTemplate from '../Templates/MainTemplate';

const PostContent = ({ state, scrollRef = null }) => (
  <Switch>
    <MainTemplate scrollRef={scrollRef} when={state.router.link === '/'} />
  </Switch>
);

export default connect(PostContent);
