import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';

export const List = styled.div``;

export const Link = styled.a`
  margin-right: 16px;
  
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Icon = styled(SvgSprite)`
  width: 21px;
  height: 21px;
  fill: #666666;
  transform: none;
  transition: all .3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;


