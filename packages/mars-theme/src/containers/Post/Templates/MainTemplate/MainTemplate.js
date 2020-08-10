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
import TimeLine from '../../../../components/TimeLine';
import bigImg from '../../../../img/pic.jpg';

import timeLogo from '../../../../img/time-logo.png';
import people from '../../../../img/people.jpg';

const testArray = [1, 2, 3, 4, 5, 6];
const timeLineData = [
  {
    date: '17 сентября 2020, воскресенье',
    posts: [
      {
        time: '12:00',
        resourceImage: timeLogo,
        post: {
          image: people,
          category: 'Культура',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'photo',
          image: people,
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'video',
          image: people,
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
    ],
  },
  {
    date: '18 декабря 2021, воскресенье',
    posts: [
      {
        time: '12:00',
        resourceImage: timeLogo,
        post: {
          image: people,
          category: 'Культура',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'photo',
          image: people,
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        resourceImage: timeLogo,
        post: {
          type: 'video',
          image: people,
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
    ],
  },
];

const MainTemplate = ({ state, libraries }) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const bigImgUrl = imageUrlCheck(bigImg, urlsWithLocal);

  const dataP = state.source.get(state.router.link.replace("/ru/",""));
  const post = state.source[dataP.type][dataP.id];

  const { acf = {} } = post;

  return (
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
              <BigImage src={bigImgUrl} />
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
            {
              timeLineData.map((item, index) => (
                <TimeLine
                  key={index}
                  data={item}
                />
              ))
            }
          </LastNews>
          <AnalyticNews>
            <Title size="small">
              Аналитика
            </Title>
            <TextPostList>
              {
                testArray.map((item) => (
                  <TextPost key={item} />
                ))
              }
            </TextPostList>
            <RightBanner />
          </AnalyticNews>
        </FlexBlock>
      </Container>
    </Wrapper>
  );
};

export default connect(MainTemplate);
