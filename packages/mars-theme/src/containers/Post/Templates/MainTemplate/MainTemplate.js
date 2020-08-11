import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import InfiniteScroll from 'react-infinite-scroll-component';
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
  const [page, setPage] = useState(1);
  const [lastPost, setLastPost] = useState([]);
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const bigImgUrl = imageUrlCheck(bigImg, urlsWithLocal);

  const dataP = state.source.get(state.router.link.replace('/ru/', ''));
  const post = state.source[dataP.type][dataP.id];

  const { acf = {} } = post;
  const formatTime = (valueDate) => {
    const date = new Date(valueDate);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  const formatDate = (valueDate) => {
    const date = new Date(valueDate);
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    // uk-UA
    const resultDate = `${date.toLocaleDateString('ru-RU', options)} ${date.toLocaleDateString('ru-RU', {
      weekday: 'long',
    })}`;
    return resultDate.replace(' г.', ',');
  };

  const loadData = () => {
    const allPosts = state.source.get(`/poslednie-novosti/page/${page}`);
    if (allPosts.items) {
      const resultPost = allPosts.items.map((item) => {
        const result = state.source.get(item.link);
        return state.source[result.type][result.id];
      });
      const data = lastPost.concat(resultPost);
      const resultsData = [];
      data.forEach((item) => {
        const date = formatDate(item.date);
        const result = [];
        data.forEach((element) => {
          if (formatDate(element.date) === date) {
            result.push({
              time: formatTime(element.date),
              date: formatDate(element.date),
              post: {
                ...element,
              },
            });
          }
        });

        if (resultsData.length === 0) {
          resultsData.push(result);
        } else {
          resultsData.forEach((el) => {
            if (JSON.stringify(el) !== JSON.stringify(result)) {
              resultsData.push(result);
            }
          });
        }
      });
      const dataArray = resultsData.map((item) => {
        return {
          date: item[0].date,
          posts: item,
        };
      });

      setLastPost(dataArray);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const fetchMoreData = () => {
    loadData();
  };

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
            <InfiniteScroll
              dataLength={lastPost.length}
              next={fetchMoreData}
              hasMore
              loader={<h4>Loading...</h4>}
            >
              {
                lastPost.map((item, index) => (
                  <TimeLine
                    key={index}
                    data={item}
                  />
                ))
              }
            </InfiniteScroll>
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
