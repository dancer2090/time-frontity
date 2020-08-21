import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
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
import Translator from '../../../../components/Translator/Translator';
import { filterNewsTimeLine } from '../../../../utils/filterNewsTimeLine';
import { Loading, NotLoadPost } from '../MainTemplate/styles';

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
    timeline = [],
    topItems = [],
    totalPages = 0,
  } = dataCategory;

  const loadTimeLineData = () => {
    const dataTimeLine = filterNewsTimeLine(lang, timeline);
    setLastPost(dataTimeLine);
  };

  useEffect(() => {
    state.customSettings.categoryPage = 2;
    actions.theme.getCategory(dataCategory.id);
    loadTimeLineData();
    if (state.customSettings.categoryPage - 1 === totalPages) setLoadMoreTimeLine(true);
  }, [state.router.link]);

  const fetchMoreData = () => {
    state.customSettings.categoryLoadMore = true;

    const config = {
      cat_minus: '-28, -14',
      post_minus: topItems,
    };
    axios.get(
      `${state.source.api}/frontity-api/get-category/${dataCategory.id}/page/${state.customSettings.categoryPage}`,
      config,
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].timeline.push(...items);
      state.customSettings.categoryPage += 1;
      loadTimeLineData();
    }).finally(() => {
      state.customSettings.categoryLoadMore = false;
      if (state.customSettings.categoryPage - 1 === totalPages) setLoadMoreTimeLine(true);
    });
  };

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
        {
          timeline.length > 0 && (
            <TimeLineContainer>
              <Title size="small">
                <Translator id="lastNewsTitle" />
              </Title>
              <TimeLineWrapper>
                <InfiniteScroll
                  dataLength={timeline.length}
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
              </TimeLineWrapper>
            </TimeLineContainer>
          )
        }
      </Container>
    </Wrapper>
  );
};

export default connect(CategoryTemplate);
