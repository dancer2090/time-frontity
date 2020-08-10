import React from 'react';
import {
  Card,
  FrameBlock,
  FrameImage,
  Content,
} from './styles';
import Link from '../link';
import preview from '../../img/card-preview.jpg';

const NewsCardPreview = ({ size }) => (
  <Card>
    <FrameBlock size={size}>
      <FrameImage src={preview} />
    </FrameBlock>
    <Content size={size}>
      <Link link="#">
        В Хабаровске десятки тысяч человек вышли на
        акцию в поддержку Сергея Фургала
      </Link>
    </Content>
  </Card>
);

export default NewsCardPreview;
