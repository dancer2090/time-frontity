import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GIconTag = styled(SvgSprite)`
  width: 23px;
  height: 23px;
  fill: #696969;
  margin-right: 29px;
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
`;
