import React, { useState, useEffect, useRef } from 'react';
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
  BigNewsContainer,
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
  BigContentEmpty,
  NewsBanner,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import SocialList from '../../../../components/SocialList';
import Link from '../../../../components/link';
import Title from '../../../../components/Title';
import NewsCard from '../../../../components/NewsCard';
import Button from '../../../../components/Button';
import TextPost from './TextPost';
import TimeLine from '../../../../components/TimeLine';
import Translator from '../../../../components/Translator/Translator';
import Banner from '../../../../components/Banner/Banner';
// eslint-disable-next-line import/named
import { filterNewsTimeLine } from '../../../../utils/filterNewsTimeLine';

const MainTemplate = ({ state, libraries, actions }) => {
  const contentRefOnMainPage = useRef(null);
  const [page, setPage] = useState(1);
  const [lastPost, setLastPost] = useState([]);
  const [loadMoreHidden, setLoadMoreHidden] = useState(false);
  const [loadMoreTimeLine, setLoadMoreTimeLine] = useState(false);
  const [fixedLinks, setFixedLink] = useState(false);

  const { lang = 'ru' } = state.theme;
  const { urlCheck } = libraries.func;

  // link pdf file download
  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    bannerMA = {},
    bannerMM = {},
    bannerMT1 = {},
    bannerMT2 = {},
  } = acfOptions;
  const {
    pdf = '',
  } = acfOptions[lang];

  //  load page data
  const dataP = state.source.data[state.router.link];

  const {
    actual = [],
    analytic = [],
    banner = {},
    linkRu = {},
    linkUk = {},
    countActual = 0,
    countLast = 0,
  } = dataP;

  const totalPages = Math.floor(countActual / 6);
  const totalPagesLastPost = Math.floor((countLast + state.customSettings.censorNewsLength) / 10);

  const {
    post: bannerPost = {},
    post2: bannerPost2 = {},
    post3: bannerPost3 = {},
    post4: bannerPost4 = {},
  } = banner;
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

  const {
    _embedded: bannerEmbed2 = {},
    link: bannerLink2 = '',
    acf: bannerAcf2 = {},
    ID: bannerId2 = '',
  } = bannerPost2;
  const {
    featured_image: bannerImage2 = { url: '' },
  } = bannerEmbed2;
  const {
    uk: bannerUk2 = { title: '', content: '' },
    ru: bannerRu2 = { title: '', content: '' },
  } = bannerAcf2;
  const bannerMeta2 = {
    uk: bannerUk2,
    ru: bannerRu2,
  };

  const {
    _embedded: bannerEmbed3 = {},
    link: bannerLink3 = '',
    acf: bannerAcf3 = {},
    ID: bannerId3 = '',
  } = bannerPost3;
  const {
    featured_image: bannerImage3 = { url: '' },
  } = bannerEmbed3;
  const {
    uk: bannerUk3 = { title: '', content: '' },
    ru: bannerRu3 = { title: '', content: '' },
  } = bannerAcf3;
  const bannerMeta3 = {
    uk: bannerUk3,
    ru: bannerRu3,
  };

  const {
    _embedded: bannerEmbed4 = {},
    link: bannerLink4 = '',
    acf: bannerAcf4 = {},
    ID: bannerId4 = '',
  } = bannerPost4;
  const {
    featured_image: bannerImage4 = { url: '' },
  } = bannerEmbed4;
  const {
    uk: bannerUk4 = { title: '', content: '' },
    ru: bannerRu4 = { title: '', content: '' },
  } = bannerAcf4;
  const bannerMeta4 = {
    uk: bannerUk4,
    ru: bannerRu4,
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
    })
      .finally(() => {
        if (state.customSettings.actualNumberPage - 1 === totalPages) setLoadMoreHidden(true);
      });
  };

  const loadData = () => {
    const lastPosts = state.theme.cases;
    const dataArray = filterNewsTimeLine(lang, lastPosts);
    setLastPost(dataArray);
    setPage(page + 1);
  };

  useEffect(() => {
    actions.theme.getMain();
    loadData();
    //scrollControl();
    window.addEventListener('scroll', scrollControl);
  }, []);

  const scrollControl = () => {
    if (contentRefOnMainPage && contentRefOnMainPage.current && contentRefOnMainPage.current.offsetTop) {
      const contentTop = contentRefOnMainPage.current.offsetTop;
      const contentBottom = contentTop + contentRefOnMainPage.current.offsetHeight;
      if (window.pageYOffset - contentTop >= -10) {
        setFixedLink(true);
      } else {
        setFixedLink(false);
      }
    }
  };

  const fetchMoreData = () => {
    state.customSettings.lastLoadMore = true;

    const config = {
      //cat_minus: '-28, -14',
      //post_minus: bannerId,
      cat_minus: '',
      post_minus: [],
    };
    axios.get(
      `${state.source.api}/frontity-api/get-last/page/${state.customSettings.lastNumberPage}`,
      config,
    ).then((response) => {
      const items = response.data;
      state.theme.cases.push(...items);
      state.customSettings.lastNumberPage += 1;
      loadData();
    }).finally(() => {
      if (state.customSettings.lastNumberPage - 1 === totalPagesLastPost) setLoadMoreTimeLine(true);
    });
  };

  return (
    <Wrapper>
      <Container>
        <SocialsWrapper>
          <SocialLabel>
            { lang === 'ru' && <Link link={linkRu.url}> {linkRu.title} </Link> }
            { lang === 'uk' && <Link link={linkUk.url}> {linkUk.title} </Link> }
          </SocialLabel>
          <RightTopWrapper>
            <PdfWrapper>
              <PdfLink href={pdf} download target="__blank">
                <PdfIcon name="pdf-icon" />
              </PdfLink>
              <PdfShow>Печатный вариант “Время”</PdfShow>
            </PdfWrapper>
            <SocialList />
          </RightTopWrapper>
        </SocialsWrapper>

        <BigNewsWrapper>
          <BigNewsContainer>
            <BigNews skeleton={bannerMeta[state.theme.lang].title !== '' ? false : true}>
              <BigFrame>
                <Link link={urlCheck(bannerLink, [state.frontity.url, state.frontity.adminUrl])}>
                  {bannerImage.url !== '' && <BigImage src={bannerImage.url} />}
                </Link>
              </BigFrame>
              <BigContent>
                <BigContentEmpty>
                  <Link link={urlCheck(bannerLink, [state.frontity.url, state.frontity.adminUrl])}>
                    {bannerMeta[state.theme.lang].title}
                  </Link>
                </BigContentEmpty>
              </BigContent>
            </BigNews>

            <BigNews skeleton={bannerMeta[state.theme.lang].title !== '' ? false : true}>
              <BigFrame>
                <Link link={urlCheck(bannerLink2, [state.frontity.url, state.frontity.adminUrl])}>
                  {bannerImage2.url !== '' && <BigImage src={bannerImage2.url} />}
                </Link>
              </BigFrame>
              <BigContent>
                <BigContentEmpty>
                  <Link link={urlCheck(bannerLink2, [state.frontity.url, state.frontity.adminUrl])}>
                    {bannerMeta2[state.theme.lang].title}
                  </Link>
                </BigContentEmpty>
              </BigContent>
            </BigNews>

            <BigNews skeleton={bannerMeta[state.theme.lang].title !== '' ? false : true}>
              <BigFrame>
                <Link link={urlCheck(bannerLink3, [state.frontity.url, state.frontity.adminUrl])}>
                  {bannerImage3.url !== '' && <BigImage src={bannerImage3.url} />}
                </Link>
              </BigFrame>
              <BigContent>
                <BigContentEmpty>
                  <Link link={urlCheck(bannerLink3, [state.frontity.url, state.frontity.adminUrl])}>
                    {bannerMeta3[state.theme.lang].title}
                  </Link>
                </BigContentEmpty>
              </BigContent>
            </BigNews>

            <BigNews skeleton={bannerMeta[state.theme.lang].title !== '' ? false : true}>
              <BigFrame>
                <Link link={urlCheck(bannerLink4, [state.frontity.url, state.frontity.adminUrl])}>
                  {bannerImage4.url !== '' && <BigImage src={bannerImage4.url} />}
                </Link>
              </BigFrame>
              <BigContent>
                <BigContentEmpty>
                  <Link link={urlCheck(bannerLink4, [state.frontity.url, state.frontity.adminUrl])}>
                    {bannerMeta4[state.theme.lang].title}
                  </Link>
                </BigContentEmpty>
              </BigContent>
            </BigNews>
          </BigNewsContainer>

          <BigBanner>
            {bannerMT1 && bannerMT1.link && bannerMT1.img && <Banner width='348px' height='316.5px' link={bannerMT1.link} bannerImg={bannerMT1.img.url} />}
            {bannerMT2 && bannerMT2.link && bannerMT2.img && <Banner width='348px' height='316.5px' link={bannerMT2.link} bannerImg={bannerMT2.img.url} />}
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
        {bannerMM && bannerMM.link && bannerMM.img && (
          <FullBanner>
            <Banner width='1041px' height='140px' link={bannerMM.link} bannerImg={bannerMM.img.url} />
          </FullBanner>
        )}
        <FlexBlock>
          <LastNews>
            <Title size="small">
              <Translator id="lastNewsTitle" />
            </Title>
            <InfiniteScroll
              dataLength={state.theme.cases.length}
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
                  <>
                    <TimeLine
                      key={index}
                      data={item}
                    />
                    {index === 4 && (
                      <NewsBanner>
                        <Banner width='100%' height='350px' link={bannerMA.link} bannerImg={bannerMA.img.url} />
                      </NewsBanner>
                    )}
                  </>
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
            {bannerMA && bannerMA.link && bannerMA.img && (
              <RightBanner ref={contentRefOnMainPage}> <Banner isFixed={fixedLinks} width='331px' height='250px' link={bannerMA.link} bannerImg={bannerMA.img.url} /> </RightBanner>
            )}
          </AnalyticNews>
        </FlexBlock>
      </Container>
    </Wrapper>
  );
};

export default connect(MainTemplate);
