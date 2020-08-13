import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Wrapper,
  TopContainer,
  ContentWrapper,
  TimeLineContainer,
  TimeLineWrapper,
  ItemCard,
  NotNews,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import NewsCardPreview from '../../../../components/NewsCardPreview';
import TimeLine from '../../../../components/TimeLine/TimeLine';
import timeLogo from '../../../../img/time-logo.png';
import people from '../../../../img/people.jpg';
import Translator from '../../../../components/Translator/Translator';

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

const CategoryTemplate = ({ state, actions, libraries }) => {
  // components state
  const [lastPost, setLastPost] = useState([]);
  const [loadMoreTimeLine, setLoadMoreTimeLine] = useState(false);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const dataCategory = state.source.get(state.router.link);
  const categoryData = state.source.category[dataCategory.id];
  const {
    acf = {
      uk: { title: '', content: '' },
      ru: { title: '', content: '' },
    },
  } = categoryData;
  const acfData = Array.isArray(acf) ? {
    uk: { title: '', content: '' },
    ru: { title: '', content: '' },
  } : acf;

  const {
    title = '',
  } = acfData[lang];
  const {
    timeLine = [],
    topItems = [],
  } = dataCategory;

  useEffect(() => {
    actions.theme.getCategory(dataCategory.id);
  }, []);

  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <Breadcrumbs links={[
            { name: <Html2React html={title} />, link: '#' },
          ]}
          />
          <SocialList />
        </TopContainer>
        <Title>
          <Html2React html={title} />
        </Title>
        <ContentWrapper>
          {
            topItems.length === 0
              ? (
                <NotNews>
                  <Translator id="notNews" />
                </NotNews>
              )
              : (
                topItems.map((item, index) => (
                  <ItemCard key={index} index={index}>
                    <NewsCardPreview data={item} size={index > 1 ? 'medium' : ''} />
                  </ItemCard>
                ))
              )
          }
        </ContentWrapper>
        <TimeLineContainer>
          <Title size="small">
            <Translator id="lastNewsTitle" />
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
};

export default connect(CategoryTemplate);
