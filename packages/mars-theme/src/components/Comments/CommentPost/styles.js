import { styled } from 'frontity';
import SvgSprite from '../../SvgSprite';
import { SIZE_LAPTOP_SMALL } from '../../../const/responsive';

export const Wrapper = styled.div`
  margin-bottom: 41px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 26px;
    display: flex;
    flex-direction: column;
  }
`;

export const DateValue = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: #969696;
  text-align: right;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 15px;
    order: 3;
    text-align: left;
  }
`;

export const NameAuthor = styled.h3`
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  margin-bottom: 7px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 24px;
    order: 1;
  }
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #282828;
  max-height: 72px;
  overflow: hidden;
  position: relative;
  transition: all .3s;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 23px;
    order: 2;
  }
`;

export const ButtonBlock = styled.div`
  height: 16px;
  background: #e5e5e5;
  z-index: 1;
  width: 107px;
  display: block;
  position: absolute;
  bottom: 4px;
  right: 0;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    bottom: 8px;
    height: 12px;
    background-color: #f2f2f2;
  }
`;

export const Button = styled(SvgSprite)`
  width: 9px;
  height: 9px;
  fill: #666666;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  cursor: pointer;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;
