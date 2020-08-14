import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';
import { SIZE_LAPTOP_SMALL } from '../../const/responsive';

export const Icon = styled(SvgSprite)`
  fill: #666;
  cursor: pointer !important;
  width: 18px;
  height: 20px;
  transform: none;
  transition: all .3s ease-in-out;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
   width: 16px;
   height: 18px;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  max-width: 251px;
  margin: 0 auto;
`;

export const SocialLink = styled.a`
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  display: inline-block;
  margin-right: 33px;
  margin-bottom: 25px;
  
  img {
    transform: none;
    transition: all .3s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const SocialIcon = styled.img`
  width: 38px;
  height: 38px;
`;
