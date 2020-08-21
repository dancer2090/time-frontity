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

const PhotoListTemplate = () => (
  <Wrapper>
    <Container>
      <TopContainer>
        <Breadcrumbs links={[
          { name: 'Фото', link: '#' },
        ]}
        />
        <SocialList />
      </TopContainer>
      <Content>
        <Title>
          Фото
        </Title>
        <Row>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Col key={item}>
                <NewsCard type="photo" showResource={false} />
              </Col>
            ))
          }
        </Row>
      </Content>
    </Container>
  </Wrapper>
);

export default PhotoListTemplate;
