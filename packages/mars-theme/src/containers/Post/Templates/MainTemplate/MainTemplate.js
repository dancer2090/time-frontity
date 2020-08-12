import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import axios from 'axios';
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
  Loading,
  NotLoadPost,
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
import Translator from '../../../../components/Translator/Translator';

const MainTemplate = ({ state, libraries }) => {
  console.log(state);
  const [page, setPage] = useState(1);
  const [lastPost, setLastPost] = useState([]);
  const [loadMoreHidden, setLoadMoreHidden] = useState(false);
  const [loadMoreTimeLine, setLoadMoreTimeLine] = useState(false);

  const { urlCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const bigImgUrl = imageUrlCheck(bigImg, urlsWithLocal);

  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const totalPages = Math.floor(dataP.countActual / 6);
  const totalPagesLastPost = Math.floor(dataP.countLast / 10);

  const {
    actual = [],
    analytic = [],
    last = [],
    banner = {},
  } = dataP;
  const { post: bannerPost = {} } = banner;
  const {
    _embedded: bannerEmbed = {},
    link: bannerLink = '',
    acf: bannerAcf = {},
    ID: bannerId = '',
  } = bannerPost;
  const {
    featured_image: bannerImage = { url: '' },
  } = bannerEmbed;
  const {
    uk: bannerUk = { title: '', content: '' },
    ru: bannerRu = { title: '', content: '' },
  } = bannerAcf;
  const bannerMeta = {
    uk: bannerUk,
    ru: bannerRu,
  };

  const loadMore1 = () => {
    state.customSettings.actualLoadMore = true;

    const config = {
      cat_minus: '-28, -7',
      post_minus: bannerId,
    };
    axios.get(
      `${state.source.api}/frontity-api/get-actual/page/${state.customSettings.actualNumberPage}`,
      config,
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].actual.push(...items);
      state.customSettings.actualNumberPage += 1;
    });

    if (state.customSettings.actualNumberPage - 1 === totalPages) setLoadMoreHidden(true);
  };

  const { acf = {} } = post;
  const formatTime = (valueDate) => {
    const date = new Date(valueDate);
    const minute = date.getMinutes();
    return `${date.getHours()}:${minute < 10 ? `0${minute}` : minute}`;
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
    const allPosts = [...last];
    const data = allPosts;
    const resultsData = [];
    allPosts.forEach((item) => {
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
        const filterArray = resultsData.filter((el) => {
          if (JSON.stringify(el) === JSON.stringify(result)) {
            return true;
          }
        });

        if (filterArray.length === 0) {
          resultsData.push(result);
        }
      }
    });
    const dataArray = resultsData.map((item) => ({
      date: item[0].date,
      posts: item,
    }));

    setLastPost(dataArray);
    setPage(page + 1);
  };

  useEffect(() => {
    const mainData = axios.get(`${state.source.api}/frontity-api/get-main`);
    const main = mainData.data;
    Object.assign(state.source.data[state.router.link], main);

    loadData();
  }, []);

  const fetchMoreData = () => {
    state.customSettings.lastLoadMore = true;

    const config = {
      cat_minus: '-28, -14',
      post_minus: bannerId,
    };
    axios.get(
      `${state.source.api}/frontity-api/get-last/page/${state.customSettings.lastNumberPage}`,
      config,
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].last.push(...items);
      state.customSettings.lastNumberPage += 1;
      loadData();
    });

    if (state.customSettings.lastNumberPage - 1 === totalPagesLastPost) setLoadMoreTimeLine(true);
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
              actual.map((item, index) => (
                <NewsListCol key={index}>
                  <NewsCard item={item} />
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
            <InfiniteScroll
              dataLength={last.length}
              next={fetchMoreData}
              hasMore={!loadMoreTimeLine}
              scrollThreshold={0.5}
              loader={<Loading><Translator id="loading" /></Loading>}
              endMessage={(
                <NotLoadPost><Translator id="notPost" /></NotLoadPost>
              )}
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
                analytic.map((item, index) => (
                  <TextPost key={index} item={item} />
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
