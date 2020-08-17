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

const PersonCard = ({ direction = 'row', sizeText = 'medium', verticalSmall = false }) => (
  <Card direction={direction} verticalSmall={verticalSmall}>
    <FrameBlock>
      <Frame src={pic} />
    </FrameBlock>
    <Content>
      <ContentBlock>
        <Title sizeText={sizeText}>
          Наталья Фролова
        </Title>
        <Text sizeText={sizeText}>
          Вызовы могут стать возможностями. «Вызовы могут стать возможностями»
        </Text>
      </ContentBlock>
      <DateBlock sizeText={sizeText}>10 сентября 2020 </DateBlock>
    </Content>
  </Card>
);

export default PersonCard;
