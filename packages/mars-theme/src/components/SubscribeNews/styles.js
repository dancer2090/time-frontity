import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';

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
`;

export const Label = styled.span`
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #666666;
`;
