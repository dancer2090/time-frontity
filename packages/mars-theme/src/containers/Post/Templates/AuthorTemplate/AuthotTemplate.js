import React from 'react';
import {
  Wrapper,
  TopNavigation,
  ContentWrapper,
  AuthorBlock,
  AuthorFrameBlock,
  AuthorFrame,
  AuthorContent,
  AuthorName,
  AuthorDescription,
  AuthorPosition,
  InfinityAuthor,
  InfinityList,
  InfinityItem,
  Banner,
  BannerValue,
} from './styles';
import authorLogo from '../../../../img/authot.jpg';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';

const AuthorTemplate = () => (
  <Wrapper>
    <Container>
      <TopNavigation>
        <Breadcrumbs links={[
          { name: 'Персоны', link: '#' },
        ]}
        />
        <SocialList />
      </TopNavigation>
      <ContentWrapper>
        <AuthorBlock>
          <AuthorFrameBlock>
            <AuthorFrame src={authorLogo} />
          </AuthorFrameBlock>
          <AuthorContent>
            <AuthorName>Александр Герасименко</AuthorName>
            <AuthorPosition>
              Выпускающий редактор
            </AuthorPosition>
            <AuthorDescription>
              Работал на радио, телевидении, в электронных медиа.
              Готовил маленькие новости и большие расследования.
              В 2017 году присоединился к большой и дружной команде "Сегодня".
              И это здорово.
            </AuthorDescription>
          </AuthorContent>
        </AuthorBlock>
        <InfinityAuthor>
          <InfinityList>
            <InfinityItem />
          </InfinityList>
          <Banner>
            <BannerValue />
          </Banner>
        </InfinityAuthor>
      </ContentWrapper>
    </Container>
  </Wrapper>
);

export default AuthorTemplate;
