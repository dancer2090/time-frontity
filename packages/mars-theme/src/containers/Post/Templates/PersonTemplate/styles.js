import { styled } from 'frontity';
import { SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

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
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    margin-right: -15px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    margin: 0;
  }
`;

export const Col = styled.div`
  width: calc((100% / 3) - 33px);
  margin-right: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: calc(50% - 15px);
    margin-right: 15px;
    margin-bottom: 15px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const InfinityBlock = styled.div`
  padding-top: 33px;
  border-top: 1px solid #969696;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding-top: 15px;
  }
`;

export const InfinityRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InfinityList = styled.div`
  width: 673px;
  margin-right: 33px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    width: 600px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const InfinityListItem = styled.div`
  margin-bottom: 33px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 15px;
  }
`;

export const Banner = styled.div`
  width: 335px;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    width: 327px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  height: 400px;
  background-color: silver;
`;
