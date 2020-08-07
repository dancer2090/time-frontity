import React from 'react';
import {
  Wrapper,
  TopContainer,
  ContentWrapper,
  TimeLineContainer,
  TimeLineWrapper,
  ItemCard,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import NewsCardPreview from '../../../../components/NewsCardPreview';
import TimeLine from '../../../../components/TimeLine/TimeLine';
import timeLogo from '../../../../img/time-logo.png';
import people from '../../../../img/people.jpg';

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

const CategoryTemplate = () => (
  <Wrapper>
    <Container>
      <TopContainer>
        <Breadcrumbs />
        <SocialList />
      </TopContainer>
      <Title>
        новости харькова
      </Title>
      <ContentWrapper>
        {
          [1, 2, 3, 4, 5].map((item, index) => (
            <ItemCard key={index} index={index}>
              <NewsCardPreview size={index > 1 ? 'medium' : ''} />
            </ItemCard>
          ))
        }
      </ContentWrapper>
      <TimeLineContainer>
        <Title size="small">
          Последние новости
        </Title>
        <TimeLineWrapper>
          {
            timeLineData.map((item, index) => (
              <TimeLine
                key={index}
                data={item}
              />
            ))
          }
        </TimeLineWrapper>
      </TimeLineContainer>
    </Container>
  </Wrapper>
);

export default CategoryTemplate;
