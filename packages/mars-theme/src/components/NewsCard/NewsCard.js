import React from 'react';
import {
  Card,
  FrameBlock,
  Frame,
  Information,
  DateValue,
  Content,
  Resources,
  ResourcesImage,
} from './styled';
import Link from '../link';
import cardImg from '../../img/card.jpg';
import ukrNet from '../../img/urk-net.png';

const NewsCard = ({ className }) => (
  <Card className={className}>
    <FrameBlock>
      <Frame src={cardImg} />
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
        <Resources href="#" target="__blank">
          <ResourcesImage src={ukrNet} />
        </Resources>
      </Information>
    </Content>
  </Card>
);

export default NewsCard;
