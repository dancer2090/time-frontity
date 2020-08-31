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
  RowAuthor,
  AuthorPhotoContainer,
  AuthorPhoto,
  AuthorInfo,
  AuthorName,
  AuthorStatus,
  AuthorText,
  TitleBlock,
  Text,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import PersonCard from '../../../../components/PersonCard';
import Translator from '../../../../components/Translator/Translator';
import Banner from '../../../../components/Banner/Banner';
import defaultImage from '../../../../img/post.jpg';

const TagTemplate = ({ state, actions, libraries }) => {
  const [timeLinePost, setTimeLinePost] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(true);
  const dataPost = state.source.data[state.router.link];
  const Html2React = libraries.html2react.Component;

  // get Banners
  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    bannerAR = {},
  } = acfOptions;

  const {
    topItems = [],
    timeline = [],
    totalPages = 20,
  } = dataPost;

  const { lang = 'ru' } = state.theme;
  const { acf = {} } = dataPost;
  const titlePost = (acf && acf[lang] ? acf[lang].title : '');

  const loadData = () => {
    const {
      timeline: timeLineData = [],
    } = dataPost;
    setTimeLinePost(timeLineData);
  };

  const fetchMoreData = () => {
    state.customSettings.loadMorePerson = true;
    axios.get(
      `${state.source.api}/frontity-api/get-tag/${state.source.data[state.router.link].term_id}/page/${state.customSettings.tagPage}`,
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].timeline.push(...items);
      state.customSettings.tagPage = state.customSettings.tagPage + 1;
      loadData();
      if (items < 10) {
        setHasLoadMore(false);
      }
    });
  };

  useEffect(() => {
    state.customSettings.tagPage = 1;
    state.source.data[state.router.link].timeline = [];
    axios.get(
      `${state.source.api}/frontity-api/get-tag-info/?tag=${dataPost.route.replace('/tag/','').replace('/','')}`
    ).then((response) => {
      const tag = response.data;
      Object.assign(state.source.data[state.router.link], tag);
      fetchMoreData();
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: titlePost, link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <TitleBlock>
          <Text>{ titlePost }</Text>
        </TitleBlock>
        <InfinityBlock>
          <InfinityRow>
            <InfiniteScroll
              dataLength={timeLinePost.length}
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
            {bannerAR && bannerAR.link && bannerAR.img && (
              <Banner2>
                <BannerContent> <Banner width='335px' height='1019px' link={bannerAR.link} bannerImg={bannerAR.img.url} /> </BannerContent>
              </Banner2>
            )}
          </InfinityRow>
        </InfinityBlock>
      </Container>
    </Wrapper>
  );
};

export default connect(TagTemplate);
