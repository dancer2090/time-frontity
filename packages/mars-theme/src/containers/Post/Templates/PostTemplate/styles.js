import { styled, css } from 'frontity';
import quoteSvg from '../../../../img/svg/blockquote.svg';
import {
  SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE,
} from '../../../../const/responsive';
import SvgSprite from '../../../../components/SvgSprite';
import TitleDiv from '../../../../components/TitleDiv';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 21px;
  padding-bottom: 20px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding-top: 15px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding-bottom: 50px;
  }
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  
  ${({ type }) => (
    type && type !== 'video'
      ? css`
        padding-bottom: 25px;
        border-bottom: 1px solid #969696;
      `
      : null
  )}
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px;
    margin-bottom: 25px;
    border-bottom:  none !important;
    
    & > div + div {
      display: none;
    }
  }
`;

export const PostName = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const Content = styled.div`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 33px;
  
  p {
    margin-bottom: 33px;
  }
  
  strong {
    font-weight: bold;
  }
  
  /* Сбрасываем привязки до и после блока с контентом, чтобы стили внутри контента не ломали верстку */
  .CONTENT-BLOCK-NAME:before{
    content: "";
    display: table;
    table-layout: fixed;
  }
  .CONTENT-BLOCK-NAME:after{
    content: "";
    display: table;
    table-layout: fixed;
  }
  
  /* Для подписей <figcaption> в теге <figure>. Нужно адаптировать под дизайн! */
  .wp-caption-text {
    font-size: 13px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #969696;
    margin: 0;
    text-align: left;
    margin-top: -8px;
  }
  
  a {
    color: #282828;
     transition: all .3s ease-in-out;
     
     &:hover {
      color: #000000;
     }
  }

  em {
    font-style: italic;
  }
  
  /* Для изображений, видео, figure и т.д. */
  .alignright {
    float:right; 
    margin-left: 32px;
    margin-bottom: 33px;
    width: fit-content !important;
    height: fit-content !important;
  
    img {
      width: 389px !important;
      height: 525px !important;
      position: relative !important; 
    }
    
    span {
      padding-bottom: 0 !important;
    }
  }
  
  .alignleft {
    float:left; 
    margin-right: 32px;
    margin-bottom: 33px;
    width: fit-content !important;
    height: fit-content !important;
    
    span {
      padding-bottom: 0 !important;
    }
  
    img {
      width: 389px !important;
      height: 525px !important;
      position: relative !important; 
    }
  }
  
  .aligncenter {
    display: block; 
    width: 100% !important;
    height: auto !important;
    margin-left: auto; 
    margin-right: auto;
    margin-bottom: 33px;
    
    img {
      width: 100% !important;
      height: auto !important;
    }
  }
  img.alignright {float:right; margin:0 0 1em 1em}
  img.alignleft {float:left; margin:0 1em 1em 0}
  img.aligncenter {display: block; margin-left: auto; margin-right: auto}
  a img.alignright {float:right; margin:0 0 1em 1em}
  a img.alignleft {float:left; margin:0 1em 1em 0}
  a img.aligncenter {display: block; margin-left: auto; margin-right: auto}
  
  
  video, iframe {
    width: 100% !important;
    height: auto;
    min-height: 458px;
    margin-bottom: 33px;
  }
  
  h1 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 9px;
  }
  
  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 9px;
  }
  
  h3, h4, h5 {
    font-weight: 600;
    margin-bottom: 9px;
  }
  
  h3 {
    font-size: 16px;
  }
  
  h4 {
    font-size: 14px;
  }
  
  h5 {
    font-size: 12px;
  }
  
  ul, ol {
    clear: both;
    padding-left: 113px;
    margin-bottom: 30px;
    
    li {
      position: relative;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.02em;
      color: #000000;
      margin-bottom: 33px;
      
      &:last-of-type {
        margin-bottom: 0;
      }
      
      &:before {
        content: "";
        width: 17px;
        height: 17px;
        background: #969696;
        position: absolute;
        left: -47px;
        top: 5px;
      }
    }
  }
  
  blockquote {
    padding-left: 144px;
    position: relative;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #000000;
    
    &:before {
      content: "";
      display: block;
      width: 47px;
      min-width: 47px;
      height: 34px;
      background-image: url(${quoteSvg});
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      left: 59px;
    }
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
     font-size: 14px;
     line-height: 23px;
     
     p {
      margin-bottom: 15px;
     }
     
      blockquote {
        padding-left: 59px;
        font-size: 14px;
        line-height: 23px;
        
        &:before {
          margin-right: 26px;
          left: 0px;
        }
      }
     
      video, iframe {
        min-height: 300px !important;
        margin-bottom: 15px;
      }
     
     .alignleft {
        float: initial;
        margin-right: 0;
        margin-bottom: 15px;
     }
     
     .alignright {
      float: initial;
      margin-left: 0;
      margin-bottom: 15px;
     }
     
     ul, ol {
      padding-left: 44px;
      margin-bottom: 25px;
      
      li {
        font-size: 14px;
        line-height: 23px;
        margin-bottom: 15px;
        
        &:before {
          width: 13px;
          height: 13px;
          left: -44px;
        }
      }
     }
     
     h1 {
        font-size: 18px;
        margin-bottom: 5px;
     }
      
      h2 {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 5px;
      }
      
      h3, h4, h5 {
        font-weight: 600;
        margin-bottom: 5px;
      }
      
      h3 {
        font-size: 14px;
      }
      
      h4 {
        font-size: 14px;
      }
      
      h5 {
        font-size: 10px;
      }
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 14px;
    letter-spacing: 0.02em;
    line-height: 23px;
    
    blockquote {
      &:before {
        width: 26px;
        min-width: 26px;
        height: 18px;
        margin-right: 26px;
        font-size: 14px;
        letter-spacing: 0.02em;
        line-height: 23px;
      }
    }
    
    figure.alignleft,
    figure.aligncenter,
    figure.alignright {
      display: block;
      margin: 0 -20px 15px -20px;
       width: calc(100% + 40px) !important; 
    }
    
    .alignleft {
      margin-left: -20px;
      margin-right: -20px;
      
      img {
        width: 100% !important;
        height: 432px !important;
      }
    }
    
    div.aligncenter {
      margin-left: -20px;
      margin-right: -20px;
      width: calc(100% + 40px) !important;
      
      span {
        padding: 0 !important;
      }
      
      img {
        position: relative;
      }
    }
    
    video, iframe {
      width: calc(100% + 40px) !important;
      margin: 0 -20px 15px -20px;
      min-height: 191px !important;
    }
    
    .wp-caption-text {
      padding: 0 20px;
      font-size: 10px;
      line-height: 27px;
    }
    
    ul, ol {
      li {
        font-size: 14px;
        letter-spacing: 0.02em;
        line-height: 23px;
      }
    }
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    blockquote {
      font-size: 14px;
      letter-spacing: 0.02em;
      line-height: 23px;
    }
  }
`;

export const TabsWrapper = styled.div`
   padding-bottom: 33px;
   border-bottom: 1px solid #969696;
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
      padding-bottom: 15px;
      
      & > div + svg {
        display: none;
      }
   }
`;

export const AuthorInformation = styled.div`
  text-decoration: none;
    padding-top: 9px;
    margin-bottom: 16px;
  a {
    padding-top: 5px;
    margin-bottom: 10px;
    margin-right: 20px;
    width: fit-content;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }
  & a:last-of-type{
    margin-right: 0;
  }
`;

export const AuthorImage = styled.img`
  width: auto;
  height: 42px;
  margin-right: 14px;
`;

export const AuthorName = styled.span`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #666666;
  text-decoration: none;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 14px;
  }
`;

export const MobileEvents = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
  margin-bottom: 28px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: flex;
  }
`;

export const MobileComments = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
`;

export const MobileCommentsIco = styled(SvgSprite)`
  width: 20px;
  height: 18px;
  fill: #666666;
  margin-right: 4px;
`;

export const MobileCommentCount = styled.span`
  font-size: 11px;
  color: #666666;
  line-height: 13px;
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

export const RightNavigation = styled.div`
  width: 250px;
  height: fit-content;
  padding-left: 32px;
  border-left: 1px solid #969696;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    padding-left: 22px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    padding: 0;
  }
`;

export const RightBanner = styled.div`
  width: 100%;
  height: 436px;
  margin-bottom: 33px;
  background: #C4C4C4;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: none;
  }
`;

export const GMobileTitle = styled(TitleDiv)` 
  display: none !important;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    display: block;
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
