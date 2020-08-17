import { styled } from 'frontity';
import { SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE } from '../../../../../const/responsive';
import PostDetails from '../PostDetails';

export const Wrapper = styled.div`
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GPostDetails = styled(PostDetails)`
  margin-bottom: 21px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    order: 4;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #000000;
  text-transform: uppercase;
  padding-bottom: 1px;
  border-bottom: 1px solid #969696;
  margin-bottom: 23px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 22px;
    line-height: 26px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 16px;
    line-height: 23px;
    border: none;
    padding: 0 17px;
    margin-bottom: 9px;
    
    br {
      display: none;
    }
  }
`;

export const BigPhotoBlock = styled.div`
  width: 100%;
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    margin-bottom: 15px;
  }
`;

export const BigPhoto = styled.div`
  width: 100%;
  height: 617px;
  margin-bottom: 1px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 500px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 400px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    height: 189px;
  }
`;

export const BigPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BigPhotoDescription = styled.span`
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #969696;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 0 17px;
    font-size: 10px;
    line-height: 27px;
    display: block;
  }
`;
