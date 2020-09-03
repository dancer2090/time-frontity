import { styled } from 'frontity';
import quoteSvg from '../../../../img/svg/blockquote.svg';
import {
  SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE,
} from '../../../../const/responsive';

export const Wrapper = styled.div`
  padding: 24px 0;
  
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

export const ContentWrapper = styled.div`
  max-width: 796px;
  width: 100%;
  margin: 52px auto;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 18px 0 22px;
    margin-top: 15px;
  }
`;

export const ContentItem = styled.div`
  margin-bottom: 33px;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;

  strong {
    font-weight: bold;
  }

  b {
    font-weight: bold;
  }
  
  a {
    margin-left: 4px;
    color: #000000;
    text-decoration: none;
  }
  
  iframe {
    width: 391px;
    height: 272px;
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
    padding-left: 59px;
    position: relative;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #000000;
    display: flex;
    
    &:before {
      content: "";
      display: block;
      width: 47px;
      min-width: 47px;
      height: 34px;
      background-image: url(${quoteSvg});
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 38px;
    }
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
     font-size: 14px;
     line-height: 23px;
     
     p {
      margin-bottom: 15px;
     }
     
      blockquote {
        padding-left: 0;
        font-size: 14px;
        line-height: 23px;
        
        &:before {
          margin-right: 26px;
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
        font-size: 12px;
      }
      
      h5 {
        font-size: 10px;
      }
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 23px;
    
    blockquote {
      &:before {
        width: 26px;
        min-width: 26px;
        height: 18px;
        margin-right: 26px;
        font-size: 12px;
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
        font-size: 12px;
        line-height: 23px;
      }
    }
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    blockquote {
      font-size: 12px;
      line-height: 23px;
    }
  }

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 0.02em;
    margin-bottom: 15px;
    
    iframe {
      height: 176px;
      width: 100%;
    }
  }
`;
