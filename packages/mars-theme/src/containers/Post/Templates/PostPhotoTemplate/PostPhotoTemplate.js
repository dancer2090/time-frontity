import React from 'react';
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
} from './styles';
import 'swiper/css/swiper.css';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';

const PostPhotoTemplate = () => (
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
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </SliderWrapper>
      </WrapperContent>
    </Container>
  </Wrapper>
);

export default PostPhotoTemplate;
