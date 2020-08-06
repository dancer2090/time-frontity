import { styled } from 'frontity';
import SvgSprite from '../../SvgSprite';

export const Wrapper = styled.div`
  margin-bottom: 41px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DateValue = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: #969696;
  text-align: right;
`;

export const NameAuthor = styled.h3`
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  margin-bottom: 7px;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #282828;
  max-height: 72px;
  overflow: hidden;
  position: relative;
  transition: all .3s;
`;

export const ButtonBlock = styled.div`
  height: 10px;
  background: #f2f2f2;
  z-index: 1;
  width: 107px;
  display: block;
  position: absolute;
  bottom: 6px;
  right: 0;
`;

export const Button = styled(SvgSprite)`
  width: 9px;
  height: 9px;
  fill: #666666;
  position: absolute;
  top: 0;
  left: 5px;
  cursor: pointer;
`;
