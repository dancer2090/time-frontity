import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';
import { SIZE_LAPTOP_SMALL } from '../../const/responsive';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const GIconTag = styled(SvgSprite)`
  width: 23px;
  height: 23px;
  fill: #696969;
  margin-right: 29px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 17px;
    height: 17px;
    margin-right: 11px;
  }
`;

export const List = styled.div`
  a {
    font-size: 12px;
    line-height: 27px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #666666;
    margin-right: 29px;
    text-decoration: none;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    a {
      font-size: 10px;
      line-height: 27px;
      margin-right: 20px;
    }
  }
`;
