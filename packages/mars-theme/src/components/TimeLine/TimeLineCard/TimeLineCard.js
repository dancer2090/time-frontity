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

const TimeLineCard = ({
  type = 'default', state, libraries, onClick, postContent, imageUrl = false,
}) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(imageUrl, urlsWithLocal);

  return (
    <Card type={type}>
      {
        type !== 'post'
        && (
        <Frame>
          <FrameImage src={urlImage} />
          {
            type === 'photo' && (
              <Photo>
                <PhotoIcon name="photo" />
                <PhotoCounter>10</PhotoCounter>
              </Photo>
            )
          }
          {
            type === 'video' && (
              <Video onClick={onClick}>
                <VideoIcon name="play" />
              </Video>
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
