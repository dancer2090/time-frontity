import React, { useState } from 'react';
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
} from './styles';
import sliderImage from '../../../../img/slider.jpg';
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

// install Swiper components
SwiperCore.use([Navigation]);

const PostPhotoTemplate = ({ state }) => {
  const [showComments, setShowComments] = useState(false);
  const { lang = 'ru' } = state.theme;
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activeIndex, setActiveIndex] = useState(1);
  const changeSlide = (swiper) => {
    const { activeIndex } = swiper;
    setActiveIndex(activeIndex + 1);
  };
  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs />
          <SocialList />
        </TopNavigation>
        <WrapperContent>
          <PostInformation>
            <PostTitleBlock>
              <PostTitle>
                В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала. Главное
              </PostTitle>
            </PostTitleBlock>
            <PostTitleDescription>
              <GPostDetails showResources={false} />
            </PostTitleDescription>
            <PostDescription>
              В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала.
              Главное. В цьому випадку точно не зможу сказати, бо не була там.
              Але масову загибель риби можуть викликати кілька причин. По-перше, цвітіння
              водоростей, переважно синьо-зелених,
              які наче плівкою вкривають водойми, створюючи дефіцит кисню. Через це риба змінює свою поведінку і мо
            </PostDescription>
          </PostInformation>
          <SliderWrapper>
            <SliderPagination>
              {activeIndex}
              /
              {slides.length}
            </SliderPagination>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{ clickable: true }}
              onSlideChange={(swiper) => changeSlide(swiper)}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                slides.map((item) => (
                  <SwiperSlide key={item}>
                    <SliderSlide>
                      <SlideImage src={sliderImage} />
                    </SliderSlide>
                    <BottomSlider>
                      <SliderDescription>
                        Фото: Пресс-служба
                      </SliderDescription>
                      <SharedBlock>
                        <GShared />
                      </SharedBlock>
                    </BottomSlider>
                  </SwiperSlide>
                ))
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
              <Shared />
            </MobileEvents>
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
          <FullBanner />
        </WrapperContent>
      </Container>
    </Wrapper>
  );
};

export default connect(PostPhotoTemplate);
