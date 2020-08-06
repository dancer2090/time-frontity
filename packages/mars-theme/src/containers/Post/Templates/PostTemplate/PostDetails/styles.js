import { styled, css } from 'frontity';
import SvgSprite from '../../../../../components/SvgSprite';
import { SIZE_MOBILE } from '../../../../../const/responsive';

export const Wrapper = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    flex-wrap: wrap;
    padding-bottom: 5px;
    border-bottom: 1px solid #969696;
  }
  
  ${({ showShared }) => (
    !showShared
      ? css`
          strong {
            width: 100%;
          }
          
          strong + span {
            flex-grow: 2;
            text-align: left;
          }
      `
      : null
  )}
`;

export const Category = styled.strong`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #666666;
  margin-right: 25px;
  display: inline-block;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 11px;
    line-height: 24px;
    margin-right: 0;
    width: 50%;
    margin-bottom: 5px;
  }
`;

export const DateValue = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: #969696;
  margin-right: 20px;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 11px;
    line-height: 13px;
    width: 50%;
    margin-right: 0;
    text-align: right;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const IconEye = styled(SvgSprite)`
  width: 27px;
  height: 14px;
  fill: #969696;
  margin-right: 10px;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    width: 16px;
    height: 8px;
    margin-right: 6px;
  }
`;

export const IconComments = styled(SvgSprite)`
  width: 19px;
  height: 17px;
  fill: #969696;
  margin-right: 10px;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    width: 11px;
    height: 10px;
    margin-right: 6px;
  }
`;

export const Counter = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: #969696;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 11px;
    line-height: 13px;
  }
`;

export const Resources = styled.div`
  max-width: 60px;
  margin-left: 20px;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    margin-left: auto;
    
    & + div {
      display: none;
    }
  }
`;

export const ResourcesImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SharedBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 2;
`;
