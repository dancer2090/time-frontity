import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  TimeItem,
  LabelDate,
  Container,
  Row,
  BlockTime,
  BlockTimeValue,
  BlockTimeResource,
  BlockTimeResourceImage,
  BlockContent,
} from './styled';
import TimeLineCard from './TimeLineCard/TimeLineCard';

const TimeLine = ({
  showDate = true, customsContent = false, customRender, data, state, libraries,
}) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const urlImage = (url) => imageUrlCheck(url, urlsWithLocal);
  const { date = '' } = data;

  return (
    <Wrapper>
      <TimeItem>
        <LabelDate>
          { date }
        </LabelDate>
        <Container>
          {
            data.posts.map((item, index) => {
              const { post = {} } = item;
              let type = 'post';
              const { featured_image: featuredImage = {} } = post._embedded || {};
              const { url = false } = featuredImage;
              if (url !== false) {
                type = 'default';
              }
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Row key={index} type={type}>
                  {
                    showDate && (
                      <BlockTime>
                        <BlockTimeValue>
                          { item.time }
                        </BlockTimeValue>
                        <BlockTimeResource>
                          <BlockTimeResourceImage src={urlImage(item.resourceImage)} />
                        </BlockTimeResource>
                      </BlockTime>
                    )
                  }

                  <BlockContent customsContent={customsContent}>
                    {
                      customsContent
                        ? customRender(item)
                        : <TimeLineCard type={type} postContent={post} imageUrl={url} />
                    }
                  </BlockContent>
                </Row>
              );
            })
          }
        </Container>
      </TimeItem>
    </Wrapper>
  );
};

export default connect(TimeLine);
