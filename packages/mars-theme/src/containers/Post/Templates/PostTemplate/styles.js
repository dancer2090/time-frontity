import { styled, css } from 'frontity';
import { SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
  
  ${({ type }) => (
    type
      ? css`
        padding-bottom: 25px;
        border-bottom: 1px solid #969696;
      `
      : null
  )}
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

export const TabsWrapper = styled.div`
   padding-bottom: 33px;
   border-bottom: 1px solid #969696;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const AuthorInformation = styled.div`
  display: flex;
  align-items: center;
  padding-top: 14px;
  margin-bottom: 26px;
`;

export const AuthorImage = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 14px;
`;

export const AuthorName = styled.span`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #666666;
`;

export const SubscribeBlock = styled.div`
  max-width: 357px;
  margin-left: auto;
  margin-bottom: 40px;
  padding-left: 43px;
`;

export const CommentsBlock = styled.div`
  max-width: 400px;
  margin-bottom: 45px;
`;

export const RightNavigation = styled.div`
  width: 250px;
  height: fit-content;
  padding-left: 32px;
  border-left: 1px solid #969696;
`;
