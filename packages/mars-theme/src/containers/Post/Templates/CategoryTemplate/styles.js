import { styled } from 'frontity';
import { SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE } from '../../../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0;
`;

export const TopContainer = styled.div`
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
  display: flex;
  flex-wrap: wrap;
  margin-right: -33px;
  margin-bottom: 88px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-right: 0;
    padding: 0 17px; 
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 0;
    margin-bottom: 47px;
  }
`;

export const ItemCard = styled.div`
  margin-right: 33px;
  
  ${({ index }) => {
    if (index > 1) return 'width: calc((100% / 3) - 33px);';
    return 'width: calc(50% - 33px); margin-bottom: 33px;';
  }};
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    margin-bottom: 33px;
    
    ${({ index }) => {
    if (index > 1) return 'width: calc(50% - 33px);';
    return 'width: calc(50% - 33px); margin-bottom: 33px;';
  }};
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-right: 0;
    width: 100%;

    ${({ index }) => (
    index >= 3
      ? 'display: none;'
      : null
  )};
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    margin-bottom: 15px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TopFlex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 33px;
`;

export const TimeLineContainer = styled.div`
  width: 100%;
  
  & > h2 {
    display: none;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    & > h2 {
      display: block;
    }
  }
`;

export const TimeLineWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  padding-top: 32px;
  border-top: 1px solid #969696;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    max-width: 100%;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding-top: 0;
    border-top: none;
  } 
`;

export const NotNews = styled.div`
  text-align: center;
  display: block;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
  width: 100%;
`;
