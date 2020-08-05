import { styled, css } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;  
  margin-bottom: 65px;
`;

export const TimeItem = styled.div`
  width: 100%;
`;

export const LabelDate = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 32px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 15px;
    line-height: 18px;  
    padding: 0 25px;
    margin-bottom: 15px;
  }
`;

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    flex-direction: column-reverse;
    
    ${({ type }) => (
    type !== 'post'
      ? 'background-color: white;'
      : null
  )}
  }
`;

export const BlockTime = styled.div`
  padding-right: 29px;
  padding-left: 3px;
  padding-top: 24px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 18px 20px 18px;
    display: flex;
    align-items: center;
  }
`;

export const BlockTimeValue = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #969696;
  font-family: 'Noto Sans', sans-serif;
  display: inline-block;
  margin-bottom: 6px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 0;
    margin-right: 15px;
    font-size: 13px;
    line-height: 16px;
  }
`;

export const BlockTimeResource = styled.div`
  max-width: 56px;
`;

export const BlockTimeResourceImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const BlockContent = styled.div`
  padding-left: 23px;
  border-left: 2px solid #969696;
  position: relative;
  
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2px solid #969696;
    position: absolute;
    left: -6px;
    top: 29px;
  }
  
  ${({ customsContent }) => (
    customsContent
      ? css`
          &:before {
            top: 0;
          }
        `
      : null
  )}
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0;
    border: none;
    
    &:before {
      display: none;
    }
  }
`;
