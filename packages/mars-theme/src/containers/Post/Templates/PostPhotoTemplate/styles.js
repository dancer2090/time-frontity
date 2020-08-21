import { styled } from 'frontity';
import cssSwiper from 'swiper/swiper-bundle.css';
import {SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE} from '../../../../const/responsive';
import PostDetails from '../../../../components/PostDetails';
import sliderArrow from '../../../../img/svg/slider-arrow.svg';
import Shared from '../../../../components/Shared';

export const Wrapper = styled.div`
  padding: 21px 0;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 15px 0;
  }
`;

export const TopNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px;
    margin-bottom: 22px;
    
    & > div + div {
      display: none;
    }
  }
`;

export const WrapperContent = styled.div`
  width: 100%;
`;

export const PostInformation = styled.div`
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 15px;
  }
`;

export const PostTitleBlock = styled.div`
  border-bottom: 1px solid #969696;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    border: none;
  }
`;

export const PostTitle = styled.h2`
  max-width: 795px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-transform: uppercase;
  color: #000000;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 22px;
    max-width: 100%;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 21px;
    padding: 0 17px;
  }
`;

export const PostTitleDescription = styled.div`
  padding-top: 25px;
  max-width: 565px;
  margin: 0 auto 33px auto;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    max-width: 100%;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px 0 17px;
    margin-bottom: 20px;
  }
`;

export const GPostDetails = styled(PostDetails)`
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    & > div {
      strong {
        width: 100%;
      }
      span {
        flex-grow: 1;
        text-align: left;
      }
      
      div:nth-of-type(2) {
        margin-right: 0;
      }      
      
      div:last-of-type {
        display: none;
      }
    }
  }
`;

export const PostDescription = styled.div`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  max-width: 758px;
  margin: 0 auto;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 23px;
    padding: 0 17px;
  }
`;

export const SliderPagination = styled.div`
  font-family: 'Noto Sans';
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  padding-right: 33px;
  color: #FFFFFF;
  margin-bottom: 8px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    width: fit-content;
    height: 19px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const SliderWrapper = styled.div`
  padding: 13px;
  margin-bottom: 35px;
  background: #282828;
  
  ${cssSwiper}
  
  .swiper-container {
    padding: 0 33px;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    width: 17px;
    height: 26px;
    
    &:after {
      display: none;
    }
    
    &:before {
      content: "";
      width: 17px;
      height: 26px;
      background: url(${sliderArrow});
      background-size: contain;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  
  .swiper-button-next {
    right: 0;
    transform: translateY(-50%) rotate(180deg);
  }
  
  .swiper-button-prev {
    left: 0;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0;
    background: transparent;
    position: relative;
    margin-bottom: 20px;
    
    .swiper-container {
      padding: 0;
    }
    
    .swiper-button-prev,
    .swiper-button-next {
      width: 31px;
      height: 31px;
      background: rgba(0, 0, 0, 0.5);
      opacity: 1;
      
      &:before {
        width: 10px;
        height: 15px;
      }
      
      &.swiper-button-disabled {
        display: none;
      }
    }
  } 
`;

export const SliderSlide = styled.div`
  height: 544px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 450px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 250px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    height: 189px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BottomSlider = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 23px;
  }
`;

export const SliderDescription = styled.span`
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #969696;
  display: block;
  flex-flow: 2;
`;

export const SharedBlock = styled.div`
  margin-top: 5px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const GShared = styled(Shared)`
  fill: white;
`;

export const TagsWrapper = styled.div`
  margin-bottom: 34px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 20px;
    margin-bottom: 33px;
  }
`;

export const SubscribeBlock = styled.div`
  max-width: 357px;
  margin-left: auto;
  margin-bottom: 40px;
  padding-left: 43px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
     max-width: 100%;
     padding: 0;
     display: flex;
     justify-content: center;
     margin-bottom: 40px;
  }
`;

export const CommentsBlock = styled.div`
  max-width: 400px;
  margin-bottom: 45px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    max-width: 100%;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const CenterContent = styled.div`
  width: 756px;
  margin-right: 35px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    width: 675px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: 453px;
    margin-right: 25px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    padding: 0 20px;
    margin-right: 0;
  } 
`;

export const SocialBlock = styled.div`
  width: 100%;
  margin-bottom: 57px;
  text-align: center;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const SocialLabel = styled.span`
  display: inline-block;
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 8px;
`;

export const SocialFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const FullBanner = styled.div`
  width: 100%;
  height: 258px;
  background: #C4C4C4;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const MobileListNews = styled.div`
  display: none;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: block;
  }
`;

export const MobileNewsWrapper = styled.div`
  margin-bottom: 30px;
`;

export const MobileNewsItem = styled.div`
  margin-bottom: 15px;
`;
