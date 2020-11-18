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
  const { urlCheck, cutStr } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const { lang = 'ru' } = state.theme;
  const {
    acf = {},
    link = '',
  } = data;
  const { featured_image: imageUrl = '' } = data._embedded;
  const {
    mobile = '',
    large = ''
  } = imageUrl;
  let resultImageUrl = '';
  if (acf.images) {
    const {
      url: urlImage = '',
    } = acf.images[0].image;
    resultImageUrl = imageUrlCheck(urlImage, urlsWithLocal);
  } else {
    if(size === 'medium') resultImageUrl = imageUrlCheck(mobile, urlsWithLocal);
    else resultImageUrl = imageUrlCheck(large, urlsWithLocal);
  }
  const { title = '' } = acf[lang];
  return (
    <Card>
      <FrameBlock size={size}>
        <Link link={urlCheck(link, [state.frontity.url, state.frontity.adminUrl])}>
          <FrameImage src={resultImageUrl || imageUrlCheck(logoImage, urlsWithLocal)} style={{ objectFit: !resultImageUrl ? 'contain' : null }} />
        </Link>
      </FrameBlock>
      <Content size={size}>
        <Link link={urlCheck(link, [state.frontity.url, state.frontity.adminUrl])}>
          <Html2React html={cutStr(title,75)} />
        </Link>
      </Content>
    </Card>
  );
};

export default connect(NewsCardPreview);
