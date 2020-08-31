import React, { useState } from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  PreviewBlock,
  PreviewImage,
  Overlay,
  PlayButton,
  IFrame,
  GPostDetails,
} from './styles';
import { generatePreviewYoutubeLink, getIdVideo } from '../../../../../utils/youtubeFormated';
import Title from '../../../../../components/Title';
import { formatDatePost } from '../../../../../utils/formatDate';

const VideoHeader = ({
  state,
  data = [],
  category = '',
  libraries,
}) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const { lang = '' } = state.theme;
  const [showFrame, setShowFrame] = useState(false);
  const {
    acf = {},
  } = data;
  const {
    video = '',
  } = acf;
  const {
    title = '',
  } = acf[lang];
  const id = getIdVideo(video);
  const imageUrl = generatePreviewYoutubeLink(video);
  const { views = '0' } = acf;
  const date = formatDatePost(lang, data.date);

  return (
    <Wrapper>
      <Title>
        <Html2React html={title} />
      </Title>
      <GPostDetails
        date={date}
        category={category}
        showResources={false}
        eyeCount={views}
      />
      {
        showFrame
          ? (
            <IFrame src={`http://www.youtube.com/embed/${id}?autoplay=1`} />
          )
          : (
            <PreviewBlock>
              <PreviewImage src={imageUrl} />
              <Overlay />
              <PlayButton onClick={() => setShowFrame(true)} />
            </PreviewBlock>
          )
      }
    </Wrapper>
  );
};

export default connect(VideoHeader);
