import { styled } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

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
  
  a {
    margin-left: 4px;
    color: #000000;
    text-decoration: none;
  }
  
  iframe {
    width: 391px;
    height: 272px;
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
