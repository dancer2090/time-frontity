import { styled } from 'frontity';
import { SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE } from '../../../../../const/responsive';

export const Wrapper = styled.div``;

export const BigFrame = styled.div`
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 23px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    margin-bottom: 9px;
  }
`;

export const BigFrameBlock = styled.div`
  width: 100%;
  height: 469px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 400px;
  } 
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 300px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    height: 135px;
  }
`;

export const BigFrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BigFrameDescription = styled.span`
  display: block;
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #969696;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 20px;
  }
`;

export const PostInformation = styled.div`
  max-width: 755px;
  width: 100%;
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 20px;
    margin-bottom: 15px;
  }
`;

export const TitlePost = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  text-transform: uppercase;
  color: #000000;
  border-bottom: 1px solid #969696;
  margin-bottom: 15px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 20px;
    line-height: 30px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 20px;
    border: none;
  }
`;

export const Quote = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  margin-top: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 16px;
    line-height: 25px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 14px;
    line-height: 23px;
    margin-top: 20px;
  }
`;
