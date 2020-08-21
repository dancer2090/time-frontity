import { styled } from 'frontity';
import { SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE } from '../../../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0;

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 15px 0;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px;
    margin-bottom: 25px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    & > div + div {
      display: none;
    }
  }
`;

export const Content = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -33px;

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-right: 0;
    padding: 0 17px;
    justify-content: space-between;
  }

  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 0;
  }
`;

export const Col = styled.div`
  width: calc((100% / 3) - 33px);
  margin-right: 33px;
  margin-bottom: 33px;

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    width: calc((100% / 2) - 33px);
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: calc((100% / 2) - 15px);
    margin-right: 0;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;
