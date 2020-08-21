import { styled } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../../../../const/responsive';

export const Card = styled.div`
  background: white;
  margin-bottom: 15px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Frame = styled.div`
  height: 140px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 207px;
  }
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 7px 8px 10px 9px;
  
  a {
    font-weight: 600;
    font-size: 13px;
    line-height: 131.4%;
    text-decoration: none;
    letter-spacing: 0.03em;
    color: #000000;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 19px 18px;
    
    a {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
