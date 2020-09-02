import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  TopNavigation,
  ContentWrapper,
  ContentItem,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Title from '../../../../components/Title';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';
import TimeLine from '../../../../components/TimeLine/TimeLine';

const MediaCenterTemplate = ({ state, libraries }) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const { acf = {} } = post;
  const {
    items = [],
    title = '',
  } = acf[lang];
  const itemsPoint = [
    {
      posts: [],
    },
  ];
  items.forEach((item) => {
    itemsPoint[0].posts.push(item);
  });

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: <Html2React html={title} />, link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <Title>
          <Html2React html={title} />
        </Title>
        <ContentWrapper>
          {
            itemsPoint.map((item, index) => (
              <TimeLine
                key={index}
                data={item}
                showDate={false}
                customsContent
                customRender={(el) => (
                  el.point
                    ? (
                      <ContentItem>
                        <Html2React html={el.point} />
                      </ContentItem>
                    )
                    : <span />
                )}
              />
            ))
          }
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default connect(MediaCenterTemplate);
