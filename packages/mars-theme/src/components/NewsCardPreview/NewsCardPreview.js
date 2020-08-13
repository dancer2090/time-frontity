import React from 'react';
import { connect } from 'frontity';
import {
  Card,
  FrameBlock,
  FrameImage,
  Content,
} from './styles';
import Link from '../link';
import logoImage from '../../img/logo.svg';

const NewsCardPreview = ({
  state, libraries, data, size,
}) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const { urlCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const { lang = 'ru' } = state.theme;
  const {
    acf = {},
    link = '',
  } = data;
  const { featured_image: imageUrl = '' } = data._embedded;
  const { url = '' } = imageUrl;
  const resultImageUrl = imageUrlCheck(url, urlsWithLocal);
  const { title = '' } = acf[lang];
  return (
    <Card>
      <FrameBlock size={size}>
        <FrameImage src={resultImageUrl || imageUrlCheck(logoImage, urlsWithLocal)} style={{ objectFit: !resultImageUrl ? 'contain' : null }} />
      </FrameBlock>
      <Content size={size}>
        <Link link={urlCheck(link, [state.frontity.url, state.frontity.adminUrl])}>
          <Html2React html={title} />
        </Link>
      </Content>
    </Card>
  );
};

export default connect(NewsCardPreview);
