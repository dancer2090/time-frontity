import React from 'react';
import {
  Wrapper,
  TopContainer,
  Content,
  Row,
  Col,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import NewsCard from '../../../../components/NewsCard';

const VideoTemplate = () => (
  <Wrapper>
    <Container>
      <TopContainer>
        <Breadcrumbs links={[
          { name: 'Видео', link: '#' },
        ]}
        />
        <SocialList />
      </TopContainer>
      <Content>
        <Title>время</Title>
        <Row>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Col key={item}>
                <NewsCard type="video" showResource={false} />
              </Col>
            ))
          }
        </Row>
      </Content>
    </Container>
  </Wrapper>
);

export default VideoTemplate;
