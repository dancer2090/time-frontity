import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Wrapper,
  TopNavigation,
  WrapperContent,
  PostInformation,
  PostTitleBlock,
  PostTitle,
  PostTitleDescription,
  GPostDetails,
  PostDescription,
  SliderWrapper,
  SliderSlide,
  SlideImage,
  BottomSlider,
  SliderDescription,
  SharedBlock,
  GShared,
  SliderPagination,
  TagsWrapper,
  SubscribeBlock,
  CommentsBlock,
  CenterContent,
  SocialBlock,
  SocialFlex,
  SocialLabel,
  FullBanner,
  MobileListNews,
  MobileNewsWrapper,
  MobileNewsItem,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';
import TabsPost from '../../../../components/TagsPost';
import SubscribeNews from '../../../../components/SubscribeNews';
import Comments from '../../../../components/Comments';
import Translator from '../../../../components/Translator/Translator';
import {
  MobileCommentCount,
  MobileComments,
  MobileCommentsIco,
  MobileEvents,
} from '../PostTemplate/styles';
import Shared from '../../../../components/Shared';
import { formatDatePost } from '../../../../utils/formatDate';
import CommentsModal from '../../../../components/Comments/CommentsModal';
import Title from '../../../../components/Title';
import NewsCardPreview from '../../../../components/NewsCardPreview/NewsCardPreview';
import Banner from '../../../../components/Banner/Banner';
import {translator} from "../../../../utils/translator";

// install Swiper components
SwiperCore.use([Navigation]);

const PostPhotoTemplate = ({ state, libraries, actions }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const fullPostUrl = `${state.frontity.url}${state.router.link}`;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const { lang = 'ru' } = state.theme;
  // get Banners
  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    bannerNR = {},
    bannerNB = {},
  } = acfOptions;
  // post data
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const {
    acf = {},
    date = '',
  } = post;
  const dateValue = formatDatePost(lang, date);
  const {
    title = '',
    description = '',
  } = acf[lang];
  const {
    images = [],
    views = '0',
  } = acf;
  const imagesArray = images.map((item) => ({
    ...item,
  }));

  // state components
  const [showComments, setShowComments] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const changeSlide = (swiper) => {
    setActiveIndex(swiper.activeIndex + 1);
  };

  const imagesPosts = state.source.get('/images');
  const {
    items = [],
  } = imagesPosts;
  const categoryPost = items.map((item) => {
    const postData = state.source.get(item.link);
    return state.source[postData.type][postData.id];
  });

  useEffect(() => {
    actions.theme.addViewPost(post.id);
  }, []);

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: <Translator id="photoCategory" />, link: lang === 'ru' ? '/images' : '/uk/images' },
            { name: title, link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <WrapperContent>
          <PostInformation>
            <PostTitleBlock>
              <PostTitle>
                <Html2React html={title} />
              </PostTitle>
            </PostTitleBlock>
            <PostTitleDescription>
              <GPostDetails
                showResources={false}
                date={dateValue}
                category={translator(lang, 'photoCategory')}
                eyeCount={views}
              />
            </PostTitleDescription>
            <PostDescription>
              <Html2React html={description} />
            </PostDescription>
          </PostInformation>
          <SliderWrapper>
            <SliderPagination>
              {activeIndex}
              /
              {imagesArray.length}
            </SliderPagination>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{ clickable: true }}
              onSlideChange={(swiper) => changeSlide(swiper)}
            >
              {
                imagesArray.map((item, index) => {
                  const {
                    image = {},
                  } = item;
                  const {
                    url = '',
                  } = image;
                  const imageResultUrl = imageUrlCheck(url, urlsWithLocal);
                  return (
                    <SwiperSlide key={index}>
                      <SliderSlide>
                        <SlideImage src={imageResultUrl} />
                      </SliderSlide>
                      <BottomSlider>
                        <SliderDescription>
                          { item[`${lang}Text`] }
                        </SliderDescription>
                        <SharedBlock>
                          <GShared link={imageResultUrl} />
                        </SharedBlock>
                      </BottomSlider>
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </SliderWrapper>
          <TagsWrapper>
            <TabsPost />
          </TagsWrapper>
          <CenterContent>
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
        </WrapperContent>
        <MobileListNews>
          <Title>
            <Translator id="newsPhoto" />
          </Title>
          <MobileNewsWrapper>
            {
              categoryPost.map((item, index) => (
                <MobileNewsItem key={index}>
                  <NewsCardPreview data={item} />
                </MobileNewsItem>
              ))
            }
          </MobileNewsWrapper>
        </MobileListNews>
      </Container>
    </Wrapper>
  );
};

export default connect(PostPhotoTemplate);
