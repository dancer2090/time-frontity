import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  TopNavigation,
  ContentContainer,
  CenterContent,
  Content,
  TabsWrapper,
  RightNavigation,
  AuthorInformation,
  AuthorImage,
  AuthorName,
  SubscribeBlock,
  CommentsBlock,
  SocialBlock,
  SocialFlex,
  MobileEvents,
  SocialLabel,
  FullBanner,
  MobileComments,
  MobileCommentsIco,
  MobileCommentCount,
  GMobileTitle,
  RightBanner,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import SocialList from '../../../../components/SocialList';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import TabsPost from '../../../../components/TagsPost';
import Shared from '../../../../components/Shared';
import SubscribeNews from '../../../../components/SubscribeNews';
import Comments from '../../../../components/Comments';
import RelatedNewsCard from './RelatedNewsCard/RelatedNewsCard';
import HeaderNews from './NewsHeader';
import InterviewHeader from './InterviewHeader';
import PublicationHeader from './PublicationHeader';
import VideoHeader from './VideoHeader';
import CommentsModal from '../../../../components/Comments/CommentsModal';
import authorLogo from '../../../../img/author-logo.jpg';
import Link from '../../../../components/link';
import Translator from '../../../../components/Translator/Translator';
import Banner from '../../../../components/Banner/Banner';
import defaultImage from '../../../../img/post.jpg';
import { translator } from '../../../../utils/translator';

const PageTemplate = ({ state, libraries, actions }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const fullPostUrl = `${state.frontity.url}${state.router.link}`;
  const { imageUrlCheck } = libraries.func;
  const { urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  // get Banners
  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    bannerNR = {},
    bannerNB = {},
  } = acfOptions;
  // get Data
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const { lang = 'ru' } = state.theme;
  const { acf = {} } = post;
  const { content = '' } = acf[lang];

  let type = '';
  let categoryName = '';
  let categoryData = {};

  // big photo
  const { featured_media: frameId = '' } = post;
  let urlBigImage = defaultImage;
  let captionImage = {
    rendered: '',
  };
  if (state.source.attachment[frameId]) {
    urlBigImage = state.source.attachment[frameId].source_url;
    captionImage = state.source.attachment[frameId].caption;
  }


  const renderHeaderPost = (typePost) => {
    return (
      <HeaderNews
        data={post}
        image={urlBigImage}
        caption={captionImage}
      />
    );
  };

  return (
    <Wrapper>
      <Container>
        <TopNavigation type={type}>
          <Breadcrumbs links={[
            { name: <Html2React html={acf[lang].title} />, link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>

        { renderHeaderPost(type) }

        <ContentContainer>
          <CenterContent>
            <Content>
              <Html2React html={content} />
            </Content>

            <TabsWrapper>
              <Shared link={fullPostUrl} />
            </TabsWrapper>
            <MobileEvents>
              <Shared link={fullPostUrl} />
            </MobileEvents>
          </CenterContent>

          <RightNavigation>
            {bannerNR && bannerNR.link && bannerNR.img && (
              <RightBanner> <Banner width='217px' height='436px' link={bannerNR.link} bannerImg={bannerNR.img.url} /> </RightBanner>
            )}
          </RightNavigation>
        </ContentContainer>

        <SocialBlock>
          <SocialLabel>
            <Translator id="followUs" />
          </SocialLabel>
          <SocialFlex>
            <SocialList />
          </SocialFlex>
        </SocialBlock>

        {bannerNB && bannerNB.link && bannerNB.img && (
          <FullBanner> <Banner width='1041px' height='258px' link={bannerNB.link} bannerImg={bannerNB.img.url} /> </FullBanner>
        )}
      </Container>
    </Wrapper>
  );
};

export default connect(PageTemplate);
