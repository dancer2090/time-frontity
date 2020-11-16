import { styled } from 'frontity';
import {SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE} from '../../../../const/responsive';
import Image from "../../../../components/image";

export const Wrapper = styled.div`
  padding: 24px 0;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 15px 0;
  }
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px 0 17px;
    margin-bottom: 25px;
   
    & > div + div {
      display: none;
    }
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Col = styled.div`
  width: calc(50% - (33px / 2));
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Card = styled.div`
  width: 100%;
`;

export const CardFrameBlock = styled.div`
  height: 321px;
  width: 100%;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 250px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 230px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    height: 218px;
  }
`;

export const CardFrame = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  text-align: center;
  background: #282828;
  
  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 141.9%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-decoration: none;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    padding: 15px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 14px 19px 17px 19px;
    
    a {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.03em;
    }
  }
`;
