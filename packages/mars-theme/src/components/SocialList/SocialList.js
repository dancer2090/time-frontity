import React from 'react';
import { connect } from 'frontity';
import {
  List,
  Link,
  Icon,
} from './styles';

const SocialList = ({ state }) => {
  const { acf = {} } = state.theme.options;
  const {
    linkTelegram = null,
    linkFacebook = null,
    linkYoutube = null,
    linkTwitter = null,
    linkInstagram = null,
  } = acf;

  return (
    <List>
      {
        linkTelegram && (
          <Link href={linkTelegram} target="__blank">
            <Icon name="telegram" />
          </Link>
        )
      }
      {
        linkFacebook && (
          <Link href={linkFacebook} target="__blank">
            <Icon name="facebook" />
          </Link>
        )
      }
      {
        linkYoutube && (
          <Link href={linkYoutube} target="__blank">
            <Icon name="youtube" />
          </Link>
        )
      }
      {
        linkTwitter && (
          <Link href={linkTwitter} target="__blank">
            <Icon name="twitter" />
          </Link>
        )
      }
      {
        linkInstagram && (
          <Link href={linkInstagram} target="__blank">
            <Icon name="insta" />
          </Link>
        )
      }
    </List>
  );
};

export default connect(SocialList);
