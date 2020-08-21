import { styled } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

export const Wrapper = styled.div`
  padding: 25px 0;
`;

export const TopNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px;
    margin-bottom: 15px;
    
    & > div + div {
      display: none;
    }
  }
`;

export const Result = styled.div`
  border-bottom: 1px solid #969696;
  margin-bottom: 40px;
`;

export const ResultTitle = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 20px;
    line-height: 26px;
    padding: 0 17px;
  }
`;

export const TimeLineContainer = styled.div`
  width: 100%;
`;

export const TimeLineWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;
