import { styled } from 'frontity';
import SvgSprite from '../../SvgSprite';
import { SIZE_LAPTOP_SMALL } from '../../../const/responsive';

export const Card = styled.div`
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    margin-bottom: 7px;
  }
`;

export const Frame = styled.div`
  width: 100%;
  height: 262px;
  position: relative;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
     height: 206px;
  }
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  background: white;
  padding: 18px 28px;
  
  ${({ type }) => (
    type === 'post'
      ? 'background: transparent;'
      : null
  )}
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 17px 18px;
  }
`;

export const Photo = styled.div`
  height: 26px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 6px;
`;

export const PhotoIcon = styled(SvgSprite)`
  width: 18px;
  height: 18px;
  fill: white;
  margin-right: 7px;
`;

export const PhotoCounter = styled.span`
  font-family: 'Noto Sans';
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
`;

export const Video = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 74px;
  height: 73px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 50px;
    height: 50px;
  }
`;

export const VideoIcon = styled(SvgSprite)`
  width: 39px;
  height: 34px;
  fill: white;
  margin-left: 22px;
   
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 29px;
    height: 24px;
    margin-left: 14px;
  }
`;
