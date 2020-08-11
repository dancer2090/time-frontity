import React from 'react';
import { connect } from 'frontity';
import {
  Card,
  Frame,
  FrameImage,
  Content,
} from './styles';
import Link from '../../../../../components/link';
import post from '../../../../../img/post.jpg';

const RelatedNewsCard = ({ state, libraries }) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const postUrl = imageUrlCheck(post, urlsWithLocal);

  return (
    <Card>
      <Frame>
        <FrameImage src={postUrl} />
      </Frame>
      <Content>
        <Link>
          Харьковская область готова к ослаблению карантина
        </Link>
      </Content>
    </Card>
  );
};

export default connect(RelatedNewsCard);
