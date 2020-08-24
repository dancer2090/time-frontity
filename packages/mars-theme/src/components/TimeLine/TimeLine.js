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
        <LabelDate>
          { date }
        </LabelDate>
        <Container>
          {
            data.posts.map((item, index) => {
              const { post = {} } = item;
              let type = 'post';
              const { featured_image: featuteImage = {} } = post._embedded;
              const { url = false } = featuteImage;
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
                        ? customRender()
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
