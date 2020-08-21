import { styled } from 'frontity';
import SvgSprite from '../../../../components/SvgSprite';
import {
  SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL,
} from '../../../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;
  padding: 22px 0;
  background: #F2F2F2;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 24px 0;
  }
  
  .infinite-scroll-component  {
    overflow: hidden !important;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 1px solid #969696;
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 15px;
    padding: 0;
    
    & div {
      display: none;
    }
  }
`;

export const RightTopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PdfWrapper = styled.div`
  position: relative;
`;

export const PdfLink = styled.a``;

export const PdfIcon = styled(SvgSprite)`
  cursor: pointer;
  width: 17px;
  height: 24px;
  margin-right: 42px;

  &:hover {
    & + div {
      opacity: 1;
    }
  }
`;

export const PdfShow = styled.div`
  position: absolute;
  opacity: 0;
  left: 0;
  top: calc(100% + 9px);
  background: #F2F2F2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 224px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  transition: all .3s ease-in-out;
`;

export const SocialLabel = styled.span`
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  margin-right: 15px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const BigNewsWrapper = styled.div`
  display: flex;
  margin-bottom: 102px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 47px;
  }
`;

export const BigNews = styled.div`
  width: 659px;
  margin-right: 33px;
  background: white;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    margin-right: 0;
  } 
`;

export const BigBanner = styled.div`
  width: 348px;
  background: #C4C4C4;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  } 
`;

export const BigFrame = styled.div`
   width: 100%;
   height: 487px;
   
   @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    height: 400px;
   }
   
   @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 350px;
   }
   
   @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 223px;
   }
`;

export const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BigContent = styled.div`
  width: 100%;
  padding: 22px 33px;
  text-align: center;

  a {
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    text-decoration: none;
    color: #282828;
    transition: all .3s ease-in-out;
    
    &:hover {
      color: #000000;
    }
    
    @media screen and (max-width: ${SIZE_LAPTOP}px) {
      font-size: 22px;
      line-height: 28px;
    }  
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 10px 16px;
    
    a {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const NewsListContainer = styled.div`
  margin-bottom: 63px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 46px;
  }
`;

export const NewsListRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -33px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    margin-right: -10px;
  }

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-right: 0;
  }
`;

export const NewsListCol = styled.div`
  width: calc((100% / 3) - 33px);
  margin-right: 33px;
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    width: calc((100% / 3) - 10px);
    margin-right: 10px;
  }

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: calc((100% / 2) - 33px);
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 14px;
  }
`;

export const NewsLoad = styled.div`
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const FullBanner = styled.div`
  height: 140px;
  width: 100%;
  background: #C4C4C4;
  margin-bottom: 72px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LastNews = styled.div`
  flex-grow: 2;
  margin-right: 62px;
  max-width: 648px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    max-width: 567px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    max-width: 100%;
    margin-right: 0;
  }
`;

export const AnalyticNews = styled.div`
  width: 331px; 
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  }
`;

export const TextPostList = styled.div`
  padding-top: 10px;
  margin-bottom: 69px;
`;

export const RightBanner = styled.div`
  width: 100%;
  height: auto;
  min-height: 350px;
  background: silver;
`;

export const Loading = styled.span`
  display: block;
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
`;

export const NotLoadPost = styled.span`
  text-align: center;
  display: block;
  font-weight: bold;
  margin: 10px 0;
`;
