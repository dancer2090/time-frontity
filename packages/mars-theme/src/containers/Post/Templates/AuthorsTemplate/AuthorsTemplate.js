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
  Banner,
  BannerContent,
  Loading,
  NotLoadPost,
  RowAuthor,
  AuthorPhotoContainer,
  AuthorPhoto,
  AuthorInfo,
  AuthorName,
  AuthorStatus,
  AuthorText
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import PersonCard from '../../../../components/PersonCard';
import Translator from '../../../../components/Translator/Translator';
import defaultImage from '../../../../img/post.jpg';

const AuthorsTemplate = ({ state, actions, libraries }) => {
  const [timeLinePost, setTimeLinePost] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(true);
  const dataPost = state.source.data[state.router.link];
  const post = state.source[dataPost.type][dataPost.id];
  const Html2React = libraries.html2react.Component;

  const {
    topItems = [],
    timeline = [],
    totalPages = 20,
  } = dataPost;

  const { lang = 'ru' } = state.theme;
  let urlBigImage = defaultImage;
  const { acf = {} } = post;
  const {
    content : authorDescription = '',
    title : authorTitle = '',
    status : authorStatus = '',
  } = acf[lang];
  const { featured_media: frameId = '' } = post;
  if (state.source.attachment[frameId]) {
    urlBigImage = state.source.attachment[frameId].source_url;
  }

  // state components
  let bigCardPersonData = {};
  const rowCardPersonData = [];
  const infinityScrollPerson = [];

  topItems.forEach((item, index) => {
      rowCardPersonData.push(item);
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
      `${state.source.api}/frontity-api/get-author/${dataPost.id}/page/${state.customSettings.authorPage}`,
    ).then((response) => {
      const items = response.data;
      state.source.data[state.router.link].timeline.push(...items);
      state.customSettings.authorPage = state.customSettings.authorPage + 1;
      loadData();
      if (items < 10) {
        setHasLoadMore(false);
      }
    });
  };

  useEffect(() => {
    state.customSettings.authorPage = 1;
    state.source.data[state.router.link].timeline = [];
    fetchMoreData();
  }, []);

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: 'Авторы', link: '#' },
            { name: authorTitle, link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <RowAuthor>
          <AuthorPhotoContainer><AuthorPhoto src={urlBigImage} /></AuthorPhotoContainer>
          <AuthorInfo>
            <AuthorName>{authorTitle}</AuthorName>
            <AuthorStatus>{authorStatus}</AuthorStatus>
            <AuthorText><Html2React html={authorDescription} /></AuthorText>
          </AuthorInfo>
        </RowAuthor>
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
            <Banner>
              <BannerContent />
            </Banner>
          </InfinityRow>
        </InfinityBlock>
      </Container>
    </Wrapper>
  );
};

export default connect(AuthorsTemplate);
