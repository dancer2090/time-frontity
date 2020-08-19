import { styled } from 'frontity';
import cssSwiper from 'swiper/swiper-bundle.css';
import { SIZE_LAPTOP_SMALL } from '../../../../const/responsive';
import PostDetails from '../../../../components/PostDetails';
import sliderArrow from '../../../../img/svg/slider-arrow.svg';
import Shared from "../../../../components/Shared";

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
`;

export const PostTitleBlock = styled.div`
  border-bottom: 1px solid #969696;
  
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
`;

export const PostTitleDescription = styled.div`
  padding-top: 25px;
  max-width: 565px;
  margin: 0 auto 33px auto;
`;

export const GPostDetails = styled(PostDetails)``;

export const PostDescription = styled.div`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  max-width: 758px;
  margin: 0 auto;
`;

export const SliderPagination = styled.div`
  font-family: 'Noto Sans';
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  padding-right: 33px;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

export const SliderWrapper = styled.div`
  padding: 13px;
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
`;

export const SliderSlide = styled.div`
  height: 544px;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BottomSlider = styled.div`
  padding: 0 33px;
  display: flex;
  justify-content: space-between;
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
`;

export const GShared = styled(Shared)`
  fill: white;
`;
