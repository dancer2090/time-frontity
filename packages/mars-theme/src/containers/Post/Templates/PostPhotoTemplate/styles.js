import { styled } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../../../const/responsive';
import PostDetails from '../../../../components/PostDetails';

export const Wrapper = styled.div`
  padding: 21px 0;
  
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

export const WrapperContent = styled.div`
  width: 100%;
`;

export const PostInformation = styled.div`
  margin-bottom: 33px;
`;

export const PostTitleBlock = styled.div`
  border-bottom: 1px solid #969696;
  
`;

export const PostTitle = styled.h2`
  max-width: 795px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-transform: uppercase;
  color: #000000;
`;

export const PostTitleDescription = styled.div`
  padding-top: 25px;
  max-width: 565px;
  margin: 0 auto 33px auto;
`;

export const GPostDetails = styled(PostDetails)``;

export const PostDescription = styled.div`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  max-width: 758px;
  margin: 0 auto;
`;

export const SliderWrapper = styled.div`
  padding: 13px;
  background: #282828;
`;
