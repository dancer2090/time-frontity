import React from 'react';
import {
  List,
  Link,
  Icon,
} from './styles';

const SocialList = () => (
  <List>
    <Link href="#" target="__blank">
      <Icon name="telegram" />
    </Link>
    <Link href="#" target="__blank">
      <Icon name="facebook" />
    </Link>
    <Link href="#" target="__blank">
      <Icon name="youtube" />
    </Link>
    <Link href="#" target="__blank">
      <Icon name="twitter" />
    </Link>
    <Link href="#" target="__blank">
      <Icon name="insta" />
    </Link>
  </List>
);

export default SocialList;
