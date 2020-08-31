import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  LeftContent,
  Name,
  Quote,
  LeftBottomContent,
  GPostDetails,
  TextDescription,
  RightContent,
  FrameBlock,
  Image,
  ImageDescription,
} from './styles';
import img from '../../../../../img/girls-image.jpg';
import {formatDatePost} from "../../../../../utils/formatDate";

const InterviewHeader = ({
  data,
  state,
  libraries,
  category,
}) => {
  // Html2React component
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  // const urlImage = imageUrlCheck(img, urlsWithLocal);

  // post data
  const {
    acf = {},
    featured_media: mediaId = '',
  } = data;
  const {
    name = '',
    title = '',
    description = '',
  } = acf[lang];
  const {
    views = '0',
  } = acf;
  const {
    source_url: urlImage = '',
    caption = {
      rendered: '',
    },
  } = state.source.attachment[mediaId];
  const date = formatDatePost(lang, data.date);

  return (
    <Wrapper>
      <LeftContent>
        <Name>
          <Html2React html={name} />
        </Name>
        <Quote>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "
          <Html2React html={title} />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "
        </Quote>
        <LeftBottomContent>
          <GPostDetails
            date={date}
            category={category}
            showResources={false}
            showShared={false}
            eyeCount={views}
          />
          <TextDescription>
            <Html2React html={description} />
          </TextDescription>
        </LeftBottomContent>
      </LeftContent>
      <RightContent>
        <FrameBlock>
          <Image src={imageUrlCheck(urlImage, urlsWithLocal)} />
        </FrameBlock>
        <ImageDescription>
          <Html2React html={caption} />
        </ImageDescription>
      </RightContent>
    </Wrapper>
  );
};

export default connect(InterviewHeader);
