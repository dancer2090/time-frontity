import { styled } from 'frontity';
import { SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`;

export const PostName = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CenterContent = styled.div`
  width: 756px;
  margin-right: 35px;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  
  p {
    margin-bottom: 33px;
  }
  
  strong {
    font-weight: bold;
  }
`;

export const RightNavigation = styled.div`
  width: 250px;
  height: fit-content;
  padding-left: 32px;
  border-left: 1px solid #969696;
`;
