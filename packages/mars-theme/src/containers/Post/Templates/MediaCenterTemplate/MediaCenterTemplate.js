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

const timeLineData = [
  {
    posts: [
      {
        content: `<strong>Медиацентр «Время» начал свою работу в 2014 году, впервые заявив о</strong>
                  себе информационным марафоном 26 октября, в день выборов в Верховную Раду Украины.\n`,
      },
      {
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        post: {
          type: 'photo',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        post: {
          type: 'video',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
    ],
  },
];
const MediaCenterTemplate = ({ state, libraries }) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const { acf = {} } = post;
  const {
    items = [],
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
            { name: 'Харьков', links: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <Title>
          Медиацентр
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
                    : <span></span>
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
