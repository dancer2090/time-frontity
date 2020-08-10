import React from 'react';
import {
  Wrapper,
  GIconTag,
  List,
} from './styles';
import Link from '../link';

const TabsPost = () => (
  <Wrapper>
    <GIconTag name="tag" />
    <List>
      <Link link="#">
        культура
      </Link>
      <Link link="#">
        культура
      </Link>
      <Link link="#">
        культура
      </Link>
    </List>
  </Wrapper>
);

export default TabsPost;
