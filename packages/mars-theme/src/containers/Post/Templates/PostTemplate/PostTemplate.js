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

const PostTemplate = ({ state, libraries, actions }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const fullPostUrl = `${state.frontity.url}${state.router.link}`;
  const { imageUrlCheck } = libraries.func;
  const { urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  // get Data
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  // get Banners
  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    bannerNR = {},
    bannerNB = {},
  } = acfOptions;
  // state
  const [showComments, setShowComments] = useState(false);
  const [authorData, setAuthorData] = useState({
    acf: {
      uk: {},
      ru: {},
    },
    link: '',
    photo: '',
  });

  const { lang = 'ru' } = state.theme;
  const { acf = {} } = post;
  const { content = '' } = acf[lang];
  // category post
  const linksCategory = state.router.link.split('/');
  let cats = '';

  if(linksCategory.length > 4) {
    for(let i = 1; i < linksCategory.length - 2; i ++){
      cats = `${cats}/${linksCategory[i]}`;
    }
    cats = `${cats}/`;
  }
  const categoryPost = cats !== '' ? cats : `/${linksCategory[1]}/`;

  // author data
  const { author: authorId = false } = acf;

  useEffect(() => {
    actions.theme.addViewPost(post.id);
    actions.theme.getTags(post.id);
    if (authorId) {
      actions.theme.getDataAuthor(authorId)
        .then(() => {
          const { author } = state.source.get(state.router.link);
          setAuthorData(author);
        });
    }
  }, []);

  let type = '';
  let categoryName = '';
  let categoryData = {};
  if (post.type === 'video') {
    type = 'video';
    categoryName = translator(lang, 'videoTitle');
    categoryData = state.source.get('/video/');
  } else if (post.type === 'persona') {
    categoryData = state.source.get(categoryPost);
    const category = state.source.category[categoryData.id] || {};
    categoryName = translator(lang, 'personCategory');
    type = 'interview';
  } else {
    categoryData = state.source.get(categoryPost);
    const category = state.source.category[categoryData.id] || {};
    const { acf: acfCategory = {} } = category;
    categoryName = acfCategory && acfCategory[lang] && acfCategory[lang].title ? acfCategory[lang].title : '';
  }

  // big photo
  const { featured_media: frameId = '' } = post;
  let urlBigImage = '';
  let captionImage = {
    rendered: '',
  };
  if (state.source.attachment[frameId]) {
    urlBigImage = state.source.attachment[frameId].source_url;
    captionImage = state.source.attachment[frameId].caption;
  }
  // related posts
  const relatedNews = [];
  const { items: categoryItems = [] } = categoryData;

  if (categoryItems.length === 0) {
    actions.theme.loadCategoryPost();
  }

  categoryItems.forEach((item) => {
    const result = state.source.get(item.link);
    relatedNews.push({
      ...state.source[result.type][result.id],
    });
  });
  // tags post
  const { tags = [] } = post;
  const tagsArray = tags.map((item) => state.source.tag[item]);

  const renderHeaderPost = (typePost) => {
    switch (typePost) {
      case 'interview':
        return (
          <InterviewHeader
            data={post}
            caption={captionImage}
            category={categoryName}
          />
        );
      case 'publication':
        return <PublicationHeader data={post} />;
      case 'video':
        return (
          <VideoHeader
            data={post}
            category={categoryName}
          />
        );
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
            { name: categoryName, link: `${categoryPost}` },
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
              <TabsPost items={state.theme.postTags}/>
              <Shared link={fullPostUrl} />
            </TabsWrapper>
            {
              authorId && (
                <AuthorInformation>
                  <Link link={urlCheck(authorData.link, [state.frontity.url, state.frontity.adminUrl])}>
                    <AuthorImage src={imageUrlCheck(authorData.photo, urlsWithLocal)} />
                    <AuthorName>
                      { authorData.acf[lang].title }
                    </AuthorName>
                  </Link>
                </AuthorInformation>
              )
            }
            <MobileEvents>
              <MobileComments onClick={() => setShowComments(true)}>
                <MobileCommentsIco name="comments" />
                <MobileCommentCount>
                  { state.theme.commentsLength }
                </MobileCommentCount>
              </MobileComments>
              <Shared link={fullPostUrl} />
            </MobileEvents>

            {/* mobile comments modal */}
            <CommentsModal
              isOpen={showComments}
              handleClose={() => setShowComments(false)}
            />

            <SubscribeBlock>
              <SubscribeNews lang={lang} />
            </SubscribeBlock>

            <CommentsBlock>
              <Comments />
            </CommentsBlock>
          </CenterContent>

          <RightNavigation>
            {bannerNR && bannerNR.link && bannerNR.img && (
              <RightBanner> <Banner width='217px' height='436px' link={bannerNR.link} bannerImg={bannerNR.img.url} /> </RightBanner>
            )}
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

        {bannerNB && bannerNB.link && bannerNB.img && (
          <FullBanner> <Banner width='1041px' height='258px' link={bannerNB.link} bannerImg={bannerNB.img.url} /> </FullBanner>
        )}
      </Container>
    </Wrapper>
  );
};

export default connect(PostTemplate);
