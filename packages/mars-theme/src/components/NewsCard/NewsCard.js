import React from 'react';
import { connect } from 'frontity';
import {
  Card,
  FrameBlock,
  Frame,
  Information,
  DateValue,
  Content,
  Resources,
  ResourcesImage,
  VideoButton,
  TimeVideo,
} from './styled';
import Link from '../link';
import cardImg from '../../img/card.jpg';
import ukrNet from '../../img/urk-net.png';
import videoPlay from '../../img/svg/play-btn.svg';

const NewsCard = ({
  type = '', showResource = true, className, state, libraries,
}) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(cardImg, urlsWithLocal);
  const urlResourse = imageUrlCheck(ukrNet, urlsWithLocal);

  return (
    <Card className={className}>
      <FrameBlock>
        <Frame src={urlImage} />
        {
          type === 'video' && (
            <>
              <VideoButton src={videoPlay} />
              <TimeVideo>10:30</TimeVideo>
            </>
          )
        }
      </FrameBlock>
      <Content>
        <Link link="#">
          Харьковская область готова
          к ослаблению карантина
        </Link>
        <Information>
          <DateValue>
            10 сентября 2020 | 12:33
          </DateValue>
          {
            showResource && (
              <Resources href="#" target="__blank">
                <ResourcesImage src={urlResourse} />
              </Resources>
            )
          }
        </Information>
      </Content>
    </Card>
  );
};

export default connect(NewsCard);
