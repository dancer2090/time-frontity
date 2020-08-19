import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Wrapper,
  TopNavigation,
  Result,
  ResultTitle,
  TimeLineContainer,
  TimeLineWrapper,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';
import { filterNewsTimeLine } from '../../../../utils/filterNewsTimeLine';
import Title from '../../../../components/Title';
import Translator from '../../../../components/Translator/Translator';
import { Loading, NotLoadPost } from '../MainTemplate/styles';
import TimeLine from '../../../../components/TimeLine/TimeLine';

const ResultSearchTemplate = ({ state, actions }) => {
  const { lang = 'ru' } = state.theme;
  const [lastPost, setLastPost] = useState([]);
  const [loadMoreTimeLine, setLoadMoreTimeLine] = useState(false);

  const data = state.source.get('/ukraina');

  const {
    topItems = [],
    timeline = [],
    totalPages = 0,
  } = data;

  data.items.forEach(item => {
    const post = state.source.get(item.link);
    timeline.push(state.source[post.type][post.id]);
  });

  useEffect(() => {
    state.customSettings.searchPage = 2;
    actions.theme.getCategory(data.id);
    loadTimeLineData();
    if (state.customSettings.searchPage - 1 === totalPages) setLoadMoreTimeLine(true);
  }, [state.router.link]);

  const loadTimeLineData = () => {
    const dataTimeLine = filterNewsTimeLine(lang, timeline);
    setLastPost(dataTimeLine);
  };

  const fetchMoreData = () => {
    state.customSettings.categoryLoadMore = true;

    const config = {
      cat_minus: '-28, -14',
      post_minus: topItems,
    };
    axios.get(
      `${state.source.api}/frontity-api/get-category/${data.id}/page/${state.customSettings.searchPage}`,
      config,
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].timeline.push(...items);
      state.customSettings.searchPage += 1;
      loadTimeLineData();
    }).finally(() => {
      state.customSettings.categoryLoadMore = false;
      if (state.customSettings.searchPage - 1 === totalPages) setLoadMoreTimeLine(true);
    });
  };

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: 'Результаты поиска', link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <Result>
          <ResultTitle>
            По запросу "Новости харькова" найдено:
          </ResultTitle>
        </Result>
        {
          timeline.length > 0 && (
            <TimeLineContainer>
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

export default connect(ResultSearchTemplate);
