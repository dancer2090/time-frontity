import React, { useState } from 'react';
import axios from 'axios';
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

const testArray = [1, 2, 3, 4, 5, 6];

const MainTemplate = ({ state, libraries }) => {

  const [loadMoreHidden, setLoadMoreHidden] = useState(false);

  const { urlCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const bigImgUrl = imageUrlCheck(bigImg, urlsWithLocal);

  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const totalPages = Math.floor(dataP.countActual / 6);

  const {
    actual = [],
    analytic = [],
    last = [],
    banner = {},
  } = dataP;
  const { post : bannerPost = {} } = banner;
  const {
    ID : bannerId = "",
    _embedded : bannerEmbed = {},
    link : bannerLink = "",
    acf : bannerAcf = {},
  } = bannerPost;
  const {
    featured_image : bannerImage = { url : "" }
  } = bannerEmbed;
  const {
    uk : bannerUk = { title : "", content : "" },
    ru : bannerRu = { title : "", content : "" },
  } = bannerAcf;
  const bannerMeta = {
    'uk' : bannerUk,
    'ru' : bannerRu,
  };

  const loadMore1 = () => {
    state.customSettings.actualLoadMore = true;

    const config = {
      cat_minus : '-28, -7',
      post_minus : bannerId
    };
    axios.get(
      `${state.source.api}/frontity-api/get-actual/page/${state.customSettings.actualNumberPage}`,
      config
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].actual.push(...items);
      state.customSettings.actualNumberPage += 1;
    });

    if (state.customSettings.actualNumberPage - 1 === totalPages) setLoadMoreHidden(true);
  };


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
              <BigImage src={bannerImage.url} />
            </BigFrame>
            <BigContent>
              <Link link={urlCheck(bannerLink, [state.frontity.url, state.frontity.adminUrl])}>
                {bannerMeta[state.theme.lang].title}
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
              actual.map((item) => (
                <NewsListCol key={item.ID}>
                  <NewsCard item={item}/>
                </NewsListCol>
              ))
            }
          </NewsListRow>
          <NewsLoad>
            <Button hidden={loadMoreHidden} onClick={() => loadMore1()}>
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
                analytic.map((item) => (
                  <TextPost key={item.ID} item={item} />
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
