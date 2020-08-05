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
import people from '../../../img/people.jpg';
import TimeLinePost from '../TimeLinePost';

const TimeLineCard = ({
  type = 'default', state, libraries, onClick, postContent,
}) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(people, urlsWithLocal);

  return (
    <Card>
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
