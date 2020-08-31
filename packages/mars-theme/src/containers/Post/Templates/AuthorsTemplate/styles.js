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
  
  a {
    text-decoration: none;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 15px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -33px;
  margin-bottom: 105px;
  
  a {
    text-decoration: none;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    margin-right: -15px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    margin: 0;
  }
`;

export const RowAuthor = styled.div`
  display: flex;
  padding-top: 17px;
  border-top: 1px solid #969696;
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;
export const AuthorPhotoContainer = styled.div`
  width: 133px;
  height: 133px;
  overflow: hidden;
  position: relative;
`;
export const AuthorPhoto = styled.img`
  position: absolute;
  display: block;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const AuthorInfo = styled.div`
  margin-left: 33px;
  flex: 1;
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-left: 0px;
  }
`;
export const AuthorName = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-top: 20px;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
  }
`;
export const AuthorStatus = styled.div`
  margin-left: 40px;
  margin-top: 8px;
  font-size: 14px;
  line-height: 17px;
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin: 0 auto;
    margin-top: 0px
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: center;
    max-width: 95px;
  }
`;
export const AuthorText = styled.div`
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.02em;
  margin-top: 33px;
  max-width: 638px;
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-left: -133px;
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
  padding-top: 85px;
  
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
  a {
    text-decoration: none;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 15px;
  }
`;

export const Banner2 = styled.div`
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

export const Loading = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const NotLoadPost = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;
