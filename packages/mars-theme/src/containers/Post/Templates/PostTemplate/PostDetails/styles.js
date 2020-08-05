import { styled } from 'frontity';
import SvgSprite from '../../../../../components/SvgSprite';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div``;

export const Category = styled.strong`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #666666;
  margin-right: 25px;
  display: inline-block;
`;

export const DateValue = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: #969696;
  margin-right: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
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
`;

export const IconComments = styled(SvgSprite)`
  width: 19px;
  height: 17px;
  fill: #969696;
  margin-right: 10px;
`;

export const Counter = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: #969696;
`;

export const Resources = styled.div`
  max-width: 60px;
  margin-left: 20px;
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
