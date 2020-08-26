import React from 'react';
import { connect } from 'frontity';
import {
  Card,
  Frame,
  FrameImage,
  Content,
  Photo,
  PhotoIcon,
  PhotoCounter,
  Video,
  VideoIcon,
} from './styled';
import TimeLinePost from '../TimeLinePost';
import {generatePreviewYoutubeLink} from "../../../utils/youtubeFormated";

const TimeLineCard = ({
  type = 'default', state, libraries, onClick, postContent, imageUrl = false,
}) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(imageUrl, urlsWithLocal);
  let imageSrc = '';
  let imageVideoSrc = '';
  if (type === 'images') {
    const {
      acf = {},
    } = postContent;
    imageSrc = imageUrlCheck(acf.images[0].image.url, urlsWithLocal);
  }
  if (type === 'video') {
    const {
      acf = {},
    } = postContent;
    imageVideoSrc = generatePreviewYoutubeLink(acf.video);
  }

  return (
    <Card type={type}>
      {
        type !== 'post'
        && (
        <Frame>
          {
            type === 'images' && (
              <>
                <FrameImage src={imageSrc} />
                <Photo>
                  <PhotoIcon name="photo" />
                  <PhotoCounter>10</PhotoCounter>
                </Photo>
              </>
            )
          }
          {
            type === 'video' && (
              <>
                <FrameImage src={imageVideoSrc} />
                <Video onClick={onClick}>
                  <VideoIcon name="play" />
                </Video>
              </>
            )
          }
          {
            type === 'default' && (
              <FrameImage src={urlImage} />
            )
          }
        </Frame>
        )
      }
      <Content type={type}>
        <TimeLinePost postContent={postContent} />
      </Content>
    </Card>
  );
};

export default connect(TimeLineCard);
