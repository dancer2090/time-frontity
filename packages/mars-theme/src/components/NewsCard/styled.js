import { styled, css } from 'frontity';
import SvgSprite from '../SvgSprite';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: none;
  text-decoration: none;
  transition: all .3s ease-in-out;
  
  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    
    a {
      color: rgba(40, 40, 40, 0.75);
    }
  }
`;

export const FrameBlock = styled.div`
  width: 100%;
  height: 206px;
  position: relative;
`;

export const Frame = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 18px 19px;
  background-color: white;

  & > a {
    display: block;
    flex-grow: 2;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #282828;
    text-decoration: none;
    margin-bottom: 27px;
    transition: all .3s ease-in-out;
    
    &:hover {
      color: #000000;
    }
  }

  ${({ type }) => (
    type === 'photo'
      ? css`
          background: #282828;

          & > a {
            color: #FFFFFF;

            &:hover {
              color: rgba(255, 255, 255, 0.75);
            }
          }
        `
      : null
  )};
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
`;

export const DateValue = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #969696;
  margin-right: 20px;
`;

export const Resources = styled.a``;

export const ResourcesImage = styled.img`
  width: 56px;
  height: auto;
`;

export const VideoButton = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55px;
  height: 54px;
`;

export const TimeVideo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 19px;
  width: fit-content;
  min-width: 54px;
  font-family: 'Noto Sans';
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
`;

export const PhotoCounter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: fit-content;
  min-height: 26px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  background: rgba(0, 0, 0, 0.5);
`;

export const PhotoIcon = styled(SvgSprite)`
  width: 18px;
  height: 16px;
  margin-right: 7px;
  fill: white;
`;

export const PhotoCounterValue = styled.span`
  font-family: 'Noto Sans';
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
`;
