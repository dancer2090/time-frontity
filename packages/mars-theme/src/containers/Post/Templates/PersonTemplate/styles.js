import { styled } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

export const Wrapper = styled.div`
  padding: 20px 0;
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

export const BigPerson = styled.div`
  width: 100%;
  margin-bottom: 33px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -33px;
  margin-bottom: 105px;
`;

export const Col = styled.div`
  width: calc((100% / 3) - 33px);
  margin-right: 33px;
`;
