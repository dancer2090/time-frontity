import { styled } from 'frontity';
import { SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1041px;
  width: 100%;
  margin: 0 auto;
  
  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    max-width: 960px;
  }
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    max-width: 728px;
  }
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    max-width: 100%;
  }
`;

export const BigPhotoBlock = styled.div`
  width: 100%;
  margin-bottom: 33px;
`;

export const BigPhoto = styled.div`
  width: 100%;
  height: 617px;
  margin-bottom: 1px;
`;

export const BigPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BigPhotoDescription = styled.span`
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #969696;
`;

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
