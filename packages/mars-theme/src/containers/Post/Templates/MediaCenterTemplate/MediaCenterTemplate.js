import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  TopNavigation,
  ContentWrapper,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Title from '../../../../components/Title';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';
import TimeLine from '../../../../components/TimeLine/TimeLine';

const timeLineData = [
  {
    date: '17 сентября 2020, воскресенье',
    posts: [
      {
        time: '12:00',
        content: `<strong>Медиацентр «Время» начал свою работу в 2014 году, впервые заявив о</strong>
                  себе информационным марафоном 26 октября, в день выборов в Верховную Раду Украины.\n`,
      },
      {
        time: '12:02',
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        post: {
          type: 'photo',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        post: {
          type: 'video',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
    ],
  },
  {
    date: '18 декабря 2021, воскресенье',
    posts: [
      {
        time: '12:00',
        post: {
          category: 'Культура',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        post: {
          type: 'photo',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        post: {
          type: 'post',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
      {
        time: '12:02',
        post: {
          type: 'video',
          category: 'Спорт',
          text: 'В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное',
        },
      },
    ],
  },
];
const MediaCenterTemplate = ({ libraries }) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;

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
            timeLineData.map((item, index) => (
              <TimeLine
                key={index}
                data={item}
                customsContent
                customRender={(el) => (el.content ? <Html2React html={el.content} /> : <span>bla bla</span>)}
              />
            ))
          }
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default connect(MediaCenterTemplate);
