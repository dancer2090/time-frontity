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
import censor from '../../img/censor.png';
import TimeLineCard from './TimeLineCard/TimeLineCard';

const TimeLine = ({
  showDate = true, customsContent = false, customRender, data,
}) => {
  const { date = '' } = data;

  return (
    <Wrapper>
      <TimeItem>
        {
          showDate && (
            <LabelDate>
              { date }
            </LabelDate>
          )
        }
        <Container>
          {
            data.posts.map((item, index) => {
              const { post = {} } = item;
              let {
                type = 'post',
              } = post;
              const { featured_image: featuredImage = {} } = post._embedded || {};
              const { url = false } = featuredImage;
              if (url !== false) {
                type = 'default';
              }
              const { link = '' } = post;
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
                          {
                            link.includes('censor') && (
                              <BlockTimeResourceImage src={censor} />
                            )
                          }
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
