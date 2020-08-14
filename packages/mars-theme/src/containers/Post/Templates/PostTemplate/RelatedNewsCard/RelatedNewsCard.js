import React from 'react';
import { connect } from 'frontity';
import {
  Card,
  Frame,
  FrameImage,
  Content,
} from './styles';
import Link from '../../../../../components/link';
import logoTime from '../../../../../img/logo.svg';

const RelatedNewsCard = ({ data, state, libraries }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  // state variables
  const { imageUrlCheck } = libraries.func;
  const { urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const { lang = 'ru' } = state.theme;

  // components data
  const { acf = {} } = data;
  const { title = '' } = acf[lang];
  const { featured_media: frameId = '' } = data;

  let urlImage = logoTime;
  if (state.source.attachment[frameId]) {
    urlImage = state.source.attachment[frameId].source_url;
  }
  const postUrl = imageUrlCheck(urlImage, urlsWithLocal);

  return (
    <Card>
      <Frame>
        <FrameImage src={postUrl} style={{ objectFit: postUrl === imageUrlCheck(logoTime, urlsWithLocal) ? 'contain' : null }} />
      </Frame>
      <Content>
        <Link link={urlCheck(data.link, [state.frontity.url, state.frontity.adminUrl])}>
          <Html2React html={title} />
        </Link>
      </Content>
    </Card>
  );
};

export default connect(RelatedNewsCard);
