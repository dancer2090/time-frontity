import React from 'react';
import {
  Card,
  FrameBlock,
  Frame,
  Content,
  ContentBlock,
  Title,
  Text,
  DateBlock,
} from './styles';
import pic from '../../img/pic.jpg';

const PersonCard = ({ direction = 'row', sizeText = 'medium' }) => (
  <Card direction={direction}>
    <FrameBlock direction={direction}>
      <Frame src={pic} />
    </FrameBlock>
    <Content direction={direction}>
      <ContentBlock>
        <Title sizeText={sizeText}>
          Наталья Фролова
        </Title>
        <Text sizeText={sizeText}>
          «Вызовы могут стать возможностями,
          вызовы могут стать возможностями. Вызовы могут стать возможностями.
          Вызовы могут стать возможностями.
          Вызовы могут стать возможностями.  Вызовы могут стать возможностями.
        </Text>
      </ContentBlock>
      <DateBlock sizeText={sizeText}>10 сентября 2020 </DateBlock>
    </Content>
  </Card>
);

export default PersonCard;
