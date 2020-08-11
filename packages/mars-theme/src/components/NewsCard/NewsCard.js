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
  PhotoCounter,
  PhotoIcon,
  PhotoCounterValue,
} from './styled';
import Link from '../link';
import cardImg from '../../img/card.jpg';
import ukrNet from '../../img/urk-net.png';

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
          type === 'photo' && (
            <PhotoCounter>
              <PhotoIcon name="photo" />
              <PhotoCounterValue>10</PhotoCounterValue>
            </PhotoCounter>
          )
        }
      </FrameBlock>
      <Content type={type}>
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
