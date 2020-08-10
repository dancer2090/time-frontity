import { styled } from 'frontity';
import PostDetails from '../PostDetails';
import { SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE } from '../../../../../const/responsive';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    flex-direction: column-reverse;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 15px;
  }
`;

export const LeftContent = styled.div`
  width: 477px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 37px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Name = styled.h1`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.03em;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 15px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 22px;
    line-height: 27px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 9px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 16px;
    line-height: 23px;
    padding: 0 20px;
  }
`;

export const Quote = styled.p`
  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 25px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 22px;
    line-height: 32px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 16px;
    line-height: 23px;
    padding: 0 20px;
  }
`;

export const LeftBottomContent = styled.div``;

export const GPostDetails = styled(PostDetails)`
   border-top: 1px solid #969696;
   padding: 15px 23px 0 23px;
   margin-bottom: 38px;
   
   @media screen and (max-width: ${SIZE_MOBILE}px) {
    border-top: 0;
    padding: 0 20px;
    margin-bottom: 20px;
  }
`;

export const TextDescription = styled.p`
  font-weight: 500;
  letter-spacing: 0.03em;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  padding: 0 17px;
  color: #000000;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 16px;
    line-height: 25px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 14px;
    line-height: 23px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
   padding: 0 20px;
   font-size: 14px;
    line-height: 23px;
   text-align: left;
  }
`;

export const RightContent = styled.div`
  width: 531px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 25px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    margin-bottom: 9px;
  }
`;

export const FrameBlock = styled.div`
  max-height: 617px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 600px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 300px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    height: 189px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageDescription = styled.span`
  display: block;
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #969696;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 23px;
    font-size: 10px;
    line-height: 27px;
  }
`;
