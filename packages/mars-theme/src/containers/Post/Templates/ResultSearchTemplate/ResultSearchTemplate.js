/* eslint-disable react/no-array-index-key */
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
import Translator from '../../../../components/Translator/Translator';
import { Loading, NotLoadPost } from '../MainTemplate/styles';
import TimeLine from '../../../../components/TimeLine/TimeLine';

const ResultSearchTemplate = ({ state, actions, libraries }) => {
  const { lang = 'ru' } = state.theme;
  const [lastPost, setLastPost] = useState([]);
  const [loadMoreTimeLine, setLoadMoreTimeLine] = useState(false);
  const ldata = libraries.source.parse(state.frontity.url + state.router.link);
  const querySearch = decodeURI(ldata.query.s);

  const {
    search = [],
  } = state.theme.searchResult;

  const loadTimeLineData = () => {
    const {
      search: searchData = [],
    } = state.theme.searchResult;
    const dataTimeLine = filterNewsTimeLine(lang, searchData);
    setLastPost(dataTimeLine);
  };

  useEffect(() => {
    actions.theme.loadSearch(querySearch)
      .then(() => {
        state.customSettings.searchPage = 2;
        loadTimeLineData();
      });
  }, [state.router.link]);

  const fetchMoreData = () => {
    state.customSettings.searchLoadMore = true;

    axios.get(`${state.source.api}/frontity-api/get-search/page/${state.customSettings.searchPage}`, {
      params: {
        s: querySearch,
      },
    }).then((response) => {
      const items = response.data;
      state.theme.searchResult = {
        search: state.theme.searchResult.search.concat(items.search),
      };
      state.customSettings.searchPage += 1;
      loadTimeLineData();
      if (state.customSettings.searchInitialLoader > items.search.length) {
        setLoadMoreTimeLine(true);
      }
    });
  };

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: <Translator id="searchResults" />, link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <Result>
          <ResultTitle>
            <Translator id="searchRequest" />
            {' '}
            &quot;
            {querySearch}
            &quot;
            {' '}
            <Translator id="searchFound" />
            :
          </ResultTitle>
        </Result>
        {
          search.length > 0 && (
            <TimeLineContainer>
              <TimeLineWrapper>
                <InfiniteScroll
                  dataLength={search.length}
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
