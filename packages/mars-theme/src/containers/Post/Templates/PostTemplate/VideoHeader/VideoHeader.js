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
import Translator from '../../../../../components/Translator/Translator';
import { formatDatePost } from '../../../../../utils/formatDate';

const VideoHeader = ({
  state,
  data = [],
  category = '',
}) => {
  const { lang = '' } = state.theme;
  const [showFrame, setShowFrame] = useState(false);
  const {
    acf = {},
  } = data;
  const {
    video = '',
  } = acf;
  const id = getIdVideo(video);
  const imageUrl = generatePreviewYoutubeLink(video);
  const { views = '0' } = acf;
  const date = formatDatePost(lang, data.date);

  return (
    <Wrapper>
      <Title>
        <Translator id="videoTitle" />
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
