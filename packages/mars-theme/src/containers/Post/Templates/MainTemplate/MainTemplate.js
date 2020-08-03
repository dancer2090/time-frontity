import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  SocialsWrapper,
  SocialLabel,
  BigNewsWrapper,
  BigNews,
  BigBanner,
  BigFrame,
  BigImage,
  BigContent,
  NewsListContainer,
  NewsListRow,
  NewsListCol,
  NewsLoad,
  FullBanner,
  FlexBlock,
  LastNews,
  AnalyticNews,
  TextPostList,
  RightBanner,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import SocialList from '../../../../components/SocialList';
import Link from '../../../../components/link';
import Title from '../../../../components/Title';
import NewsCard from '../../../../components/NewsCard';
import Button from '../../../../components/Button';
import TextPost from './TextPost';
import bigImg from '../../../../img/pic.jpg';

const testArray = [1, 2, 3, 4, 5, 6];

const MainTemplate = () => (
  <Wrapper>
    <Container>
      <SocialsWrapper>
        <SocialLabel>
          Информационное агенство Время
        </SocialLabel>
        <SocialList />
      </SocialsWrapper>

      <BigNewsWrapper>
        <BigNews>
          <BigFrame>
            <BigImage src={bigImg} />
          </BigFrame>
          <BigContent>
            <Link link="#">
              Є важливий індикатор: в Кабміні розповіли,
              коли ЄС може знову відкрити кордони для українців
            </Link>
          </BigContent>
        </BigNews>
        <BigBanner>
          Banner
        </BigBanner>
      </BigNewsWrapper>

      <NewsListContainer>
        <Title size="small">
          актуальное сегодня
        </Title>
        <NewsListRow>
          {
            testArray.map((item) => (
              <NewsListCol key={item}>
                <NewsCard />
              </NewsListCol>
            ))
          }
        </NewsListRow>
        <NewsLoad>
          <Button>
            загрузить еще новости
          </Button>
        </NewsLoad>
      </NewsListContainer>
      <FullBanner />
      <FlexBlock>
        <LastNews>
          <Title size="small">
            последние новости
          </Title>
          left
        </LastNews>
        <AnalyticNews>
          <Title size="small">
            Аналитика
          </Title>
          <TextPostList>
            <TextPost />
            <TextPost />
            <TextPost />
            <TextPost />
            <TextPost />
          </TextPostList>
          <RightBanner />
        </AnalyticNews>
      </FlexBlock>
    </Container>
  </Wrapper>
);

export default connect(MainTemplate);
