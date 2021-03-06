import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Wrapper,
  TopContainer,
  Content,
  Row,
  Col,
  SpanLoading,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import NewsCard from '../../../../components/NewsCard';
import Translator from '../../../../components/Translator/Translator';

const PhotoListTemplate = ({ state }) => {
  const [loadMore, setLoadMore] = useState(false);
  const [postsArray, setPostsArray] = useState([]);
  const dataPhoto = state.source.get(state.router.link);
  const {
    totalPages = 1,
  } = dataPhoto;

  const fetchMoreData = () => {
    axios.get(`${state.source.api}/frontity-api/get-images/page/${state.customSettings.photoPage}`)
      .then(({ data }) => {
        const result = postsArray.concat(data);
        setPostsArray(result);
        state.customSettings.photoPage += 1;
      }).finally(() => {
        if (state.customSettings.photoPage - 1 === totalPages) setLoadMore(true);
      });
  };

  useEffect(() => {
    fetchMoreData();
    // setPostsArray(resultPostData);
    if (state.customSettings.photoPage - 1 === totalPages) setLoadMore(true);
  }, [], () => {
    state.customSettings.photoPage = 2;
  });

  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <Breadcrumbs links={[
            { name: <Translator id="photoCategory" />, link: '#' },
          ]}
          />
          <SocialList />
        </TopContainer>
        <Content>
          <Title>
            <Translator id="photoCategory" />
          </Title>
          <InfiniteScroll
            next={fetchMoreData}
            hasMore={!loadMore}
            scrollThreshold={0.5}
            loader={<SpanLoading><Translator id="loading" /></SpanLoading>}
            endMessage={(
              <SpanLoading><Translator id="notPost" /></SpanLoading>
            )}
            dataLength={postsArray.length}
          >
            <Row>
              {
                postsArray.map((item, index) => (
                  <Col key={index}>
                    <NewsCard
                      item={item}
                      type="photo"
                      showResource={false}
                    />
                  </Col>
                ))
              }
            </Row>
          </InfiniteScroll>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default connect(PhotoListTemplate);
