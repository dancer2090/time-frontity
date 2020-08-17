import {css, styled} from 'frontity';
import {SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE} from "../../../../const/responsive";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid #969696;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px 9px 17px;
    
    & > div + div {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 17px;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding-top: 9px;
  }
`;

export const AuthorBlock = styled.div`
  display: flex;
  margin-bottom: 85px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 20px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    display: block;
  }
`;

export const AuthorFrameBlock = styled.div`
  width: 133px;
  min-width: 133px;
  height: 133px;
  margin-right: 33px;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    float: left;
    margin-right: 14px;
    margin-bottom: 9px;
  }
`;

export const AuthorFrame = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthorContent = styled.div``;

export const AuthorName = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 8px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 0;
  }
`;

export const AuthorPosition = styled.span`
  display: block;
  padding-left: 40px;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding-left: 0;
    font-size: 12px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
    margin-bottom: 0;
  }
`;

export const AuthorDescription = styled.div`
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  max-width: 638px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #000000;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    width: 100%;
    clear: both;
  }
`;

export const InfinityAuthor = styled.div`
  display: flex;
  height: 150px;
  flex-wrap: wrap;
`;

export const InfinityList = styled.div`
  width: 673px;
  margin-right: 33px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
      width: 627px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const InfinityItem = styled.div`
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 15px;
  }
`;

export const Banner = styled.div`
  width: 335px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    width: 300px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  }
`;

export const BannerValue = styled.div`
  height: 100%;
  width: 100%;
  background-color: silver;
`;
