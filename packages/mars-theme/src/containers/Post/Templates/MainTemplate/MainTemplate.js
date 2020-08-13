import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Wrapper,
  SocialsWrapper,
  SocialLabel,
  RightTopWrapper,
  PdfWrapper,
  PdfIcon,
  PdfShow,
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
  PdfLink,
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
import { formatDate } from '../../../../utils/formatDate';

const MainTemplate = ({ state, libraries, actions }) => {
  const [page, setPage] = useState(1);
  const [lastPost, setLastPost] = useState([]);
  const [loadMoreHidden, setLoadMoreHidden] = useState(false);
  const [loadMoreTimeLine, setLoadMoreTimeLine] = useState(false);

  const { lang = 'ru' } = state.theme;
  const { urlCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const bigImgUrl = imageUrlCheck(bigImg, urlsWithLocal);

  // link pdf file download
  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    pdf = '',
  } = acfOptions[lang];

  //  load page data
  const dataP = state.source.get(state.router.link);
  const post = dataP.type && dataP.id ? state.source[dataP.type][dataP.id] : {};

  const {
    actual = [],
    analytic = [],
    last = [],
    banner = {},
    countActual = 0,
    countLast = 0,
  } = dataP;

  const totalPages = Math.floor(countActual / 6);
  const totalPagesLastPost = Math.floor(countLast / 10);

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

  const loadData = () => {
    const allPosts = [...last];
    const data = allPosts;
    const resultsData = [];
    allPosts.forEach((item) => {
      const date = formatDate(lang, item.date);
      const result = [];
      data.forEach((element) => {
        if (formatDate(lang, element.date) === date) {
          result.push({
            time: formatTime(element.date),
            date: formatDate(lang, element.date),
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
    loadData();
    actions.theme.getMain();
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
            <Translator id="homePageLabelTime" />
          </SocialLabel>
          <RightTopWrapper>
            <PdfWrapper>
              <PdfLink href={pdf} download>
                <PdfIcon name="pdf-icon" />
              </PdfLink>
              <PdfShow>Печатный вариант “Время”</PdfShow>
            </PdfWrapper>
            <SocialList />
          </RightTopWrapper>
        </SocialsWrapper>

        <BigNewsWrapper>
          <BigNews>
            <BigFrame>
              {bannerImage.url !== '' && <BigImage src={bannerImage.url} />}
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
            <Translator id="actualToday" />
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
              <Translator id="loadNewsMore" />
            </Button>
          </NewsLoad>
        </NewsListContainer>
        <FullBanner />
        <FlexBlock>
          <LastNews>
            <Title size="small">
              <Translator id="lastNewsTitle" />
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
              <Translator id="analiticTitle" />
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
