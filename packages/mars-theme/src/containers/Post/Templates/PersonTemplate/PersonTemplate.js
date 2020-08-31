import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {
  Wrapper,
  TopNavigation,
  BigPerson,
  Row,
  Col,
  InfinityBlock,
  InfinityRow,
  InfinityList,
  InfinityListItem,
  Banner2,
  BannerContent,
  Loading,
  NotLoadPost,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import PersonCard from '../../../../components/PersonCard';
import Translator from '../../../../components/Translator/Translator';
import Banner from '../../../../components/Banner/Banner';

const PersonTemplate = ({ state, actions }) => {
  const [timeLinePost, setTimeLinePost] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(true);
  const dataPost = state.source.data[state.router.link];

  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    bannerPR = {},
  } = acfOptions;

  const {
    topItems = [],
    timeline = [],
    totalPages = 1,
  } = dataPost;

  // state components
  let bigCardPersonData = {};
  const rowCardPersonData = [];
  const infinityScrollPerson = [];

  topItems.forEach((item, index) => {
    if (index === 0) {
      bigCardPersonData = item;
    } else {
      rowCardPersonData.push(item);
    }
  });

  const loadData = () => {
    const {
      timeline: timeLineData = [],
    } = dataPost;
    setTimeLinePost(timeLineData);
  };

  const fetchMoreData = () => {
    state.customSettings.loadMorePerson = true;

    axios.get(
      `${state.source.api}/frontity-api/get-persona/page/${state.customSettings.personPage}`,
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].timeline.push(...items);
      state.customSettings.personPage += 1;
      loadData();
      if (state.customSettings.personPage > totalPages) {
        setHasLoadMore(false);
      }
    });
  };

  useEffect(() => {
    actions.theme.getDataPersonLoad();
    loadData();
    if (state.customSettings.personPage > totalPages) {
      setHasLoadMore(false);
    }
  }, [], () => {
    state.customSettings.personPage = 2;
  });

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: 'Персоны', link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <Title>
          Персоны
        </Title>
        <BigPerson>
          <PersonCard personData={bigCardPersonData} />
        </BigPerson>
        <Row>
          {
            rowCardPersonData.map((item, index) => (
              <Col key={index}>
                <PersonCard
                  personData={item}
                  direction="column"
                  sizeText="small"
                />
              </Col>
            ))
          }
        </Row>
        <InfinityBlock>
          <InfinityRow>
            <InfiniteScroll
              dataLength={infinityScrollPerson.length}
              next={fetchMoreData}
              hasMore={hasLoadMore}
              scrollThreshold={0.5}
              loader={<Loading><Translator id="loading" /></Loading>}
              endMessage={(
                <NotLoadPost><Translator id="notPost" /></NotLoadPost>
              )}
            >
              <InfinityList>
                {
                  timeLinePost.map((item, index) => (
                    <InfinityListItem key={index}>
                      <PersonCard
                        personData={item}
                        verticalSmall
                        sizeText="small"
                      />
                    </InfinityListItem>
                  ))
                }
              </InfinityList>
            </InfiniteScroll>
            {bannerPR && bannerPR.link && bannerPR.img && (
              <Banner2>
                <BannerContent> <Banner width='335px' height='400px' link={bannerPR.link} bannerImg={bannerPR.img.url} /> </BannerContent>
              </Banner2>
            )}
          </InfinityRow>
        </InfinityBlock>
      </Container>
    </Wrapper>
  );
};

export default connect(PersonTemplate);
