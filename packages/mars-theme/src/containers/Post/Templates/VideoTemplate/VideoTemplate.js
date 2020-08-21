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
import { generatePreviewYoutubeLink } from '../../../../utils/youtubePreviewLink';

const VideoTemplate = ({ state }) => {
  const [loadMore, setLoadMore] = useState(false);
  const [postsArray, setPostsArray] = useState([]);
  const dataPost = state.source.get(state.router.link);
  const {
    items = [],
    totalPages = 1,
  } = dataPost;

  const resultPostData = items.map((item) => {
    const data = state.source.get(item.link);
    return state.source[data.type][data.id];
  });

  useEffect(() => {
    setPostsArray(resultPostData);
    if (state.customSettings.videoPage - 1 === totalPages) setLoadMore(true);
  }, [], () => {
    state.customSettings.videoPage = 2;
  });

  const fetchMoreData = () => {
    axios.get(`${state.source.api}/frontity-api/get-video/page/${state.customSettings.videoPage}`)
      .then(({ data }) => {
        const result = postsArray.concat(data);
        setPostsArray(result);
        state.customSettings.videoPage += 1;
      }).finally(() => {
        if (state.customSettings.videoPage - 1 === totalPages) setLoadMore(true);
      });
  };

  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <Breadcrumbs links={[
            { name: 'Видео', link: '#' },
          ]}
          />
          <SocialList />
        </TopContainer>
        <Content>
          <Title>
            время
          </Title>
          <InfiniteScroll
            next={fetchMoreData}
            hasMore={!loadMore}
            scrollThreshold={0.5}
            loader={<SpanLoading><Translator id="loading" /></SpanLoading>}
            endMessage={(
              <SpanLoading><Translator id="notPost" /></SpanLoading>
            )}
            dataLength={resultPostData.length}
          >
            <Row>
              {
                postsArray.map((item, index) => {
                  const {
                    acf = {},
                  } = item;
                  const { video = '' } = acf;
                  const linkVideo = generatePreviewYoutubeLink(video);
                  return (
                    <Col key={index}>
                      <NewsCard
                        type="video"
                        item={item}
                        linkVideo={linkVideo}
                        showResource={false}
                      />
                    </Col>
                  );
                })
              }
            </Row>
          </InfiniteScroll>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default connect(VideoTemplate);
