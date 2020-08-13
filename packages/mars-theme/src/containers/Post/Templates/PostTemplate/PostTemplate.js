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
import CommentsModal from '../../../../components/Comments/CommentsModal';
import authorLogo from '../../../../img/author-logo.jpg';
import Link from '../../../../components/link';
import Translator from '../../../../components/Translator/Translator';

const PostTemplate = ({ state, libraries, actions }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const fullPostUrl = `${state.frontity.url}${state.router.link}`;
  // get Data
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const { lang = 'ru' } = state.theme;
  const { acf = {} } = post;
  const { content = '' } = acf[lang];
  // category post
  const linksCategory = state.router.link.split('/');
  let categoryPost = linksCategory[1];
  if (linksCategory.length === 4 || linksCategory.length === 5) {
    if (state.theme.lang === 'uk') {
      categoryPost = linksCategory[2];
    }
  }

  useEffect(() => {
    actions.theme.addViewPost(post.id);
  }, []);

  const categoryData = state.source.get(`/${categoryPost}/`);
  const category = state.source.category[categoryData.id];
  const { acf: acfCategory = {} } = category;
  const { title: categoryName = '' } = acfCategory[lang];

  // big photo
  const { featured_media: frameId = '' } = post;
  const {
    source_url: urlBigImage = '',
    caption: captionImage = '',
  } = state.source.attachment[frameId];
  // related posts
  const relatedNews = [];
  const { items: categoryItems = [] } = categoryData;
  categoryItems.forEach((item) => {
    const result = state.source.get(item.link);
    relatedNews.push({
      ...state.source[result.type][result.id],
    });
  });
  // tags post
  const { tags = [] } = post;
  const tagsArray = tags.map((item) => state.source.tag[item]);
  // author data
  const { author = 0 } = post;
  const authorData = state.source.author[author];
  const {
    name: authorName = '',
    link: authorLink = '#',
  } = authorData;
  // state
  const [showComments, setShowComments] = useState(false);
  const type = '';

  const renderHeaderPost = (typePost) => {
    switch (typePost) {
      case 'interview':
        return <InterviewHeader />;
      case 'publication':
        return <PublicationHeader />;
      default:
        return (
          <HeaderNews
            data={post}
            category={categoryName}
            image={urlBigImage}
            caption={captionImage}
          />
        );
    }
  };

  return (
    <Wrapper>
      <Container>
        <TopNavigation type={type}>
          <Breadcrumbs links={[
            { name: categoryName, link: `/${categoryPost}/` },
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
              <TabsPost />
              <Shared link={fullPostUrl} />
            </TabsWrapper>
            <AuthorInformation>
              <Link link={authorLink}>
                <AuthorImage src={authorLogo} />
                <AuthorName>
                  {authorName}
                </AuthorName>
              </Link>
            </AuthorInformation>
            <MobileEvents>
              <MobileComments onClick={() => setShowComments(true)}>
                <MobileCommentsIco name="comments" />
                <MobileCommentCount>999</MobileCommentCount>
              </MobileComments>
              <Shared link={fullPostUrl} />
            </MobileEvents>

            {/* mobile comments modal */}
            <CommentsModal
              isOpen={showComments}
              handleClose={() => setShowComments(false)}
            />

            <SubscribeBlock>
              <SubscribeNews />
            </SubscribeBlock>

            <CommentsBlock>
              <Comments />
            </CommentsBlock>
          </CenterContent>

          <RightNavigation>
            <RightBanner />
            {
              relatedNews.length > 0 && (
                <GMobileTitle size="small">
                  { categoryName }
                </GMobileTitle>
              )
            }
            {
              relatedNews.splice(0, 4).map((item, index) => (
                <RelatedNewsCard key={index} data={item} />
              ))
            }
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

        <FullBanner />
      </Container>
    </Wrapper>
  );
};

export default connect(PostTemplate);
