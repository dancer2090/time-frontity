import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';
import { SIZE_LAPTOP_SMALL } from '../../const/responsive';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

export const GIconMessage = styled(SvgSprite)`
  width: 19px;
  height: 14px;
  margin-right: 7px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 16px;
    height: 12px;
    margin-right: 8px;
  }
`;

export const Label = styled.span`
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #666666;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 10px;
    line-height: 27px;
  }
`;
