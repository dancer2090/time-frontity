import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';
import {SIZE_LAPTOP_SMALL, SIZE_MOBILE} from '../../const/responsive';

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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  
  @media screen and (max-width: ${SIZE_MOBILE}) {
    margin-top: 15px;
  }
`;

export const Button = styled.button`
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #666666;
  cursor: pointer;
  margin-bottom: 6px;
  
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}) {
    margin: 0;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const MessageConfirm = styled.div`
  font-weight: 500;
  white-space: nowrap;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
