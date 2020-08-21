import { styled } from 'frontity';
import play from '../../../../../img/svg/play-btn.svg';
import PostDetails from '../../../../../components/PostDetails';
import {SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE} from '../../../../../const/responsive';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const PreviewBlock = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 350px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 270px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.3);
`;

export const PlayButton = styled.button`
  width: 55px;
  height: 55px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${play});
  border: none;
  background-color: transparent;
  background-size: contain;
  cursor: pointer;
  
  &:active,
  &:focus {
    outline: none;
  }
`;

export const IFrame = styled.iframe`
  height: 500px;
  width: 100%;
  display: block;
`;

export const GPostDetails = styled(PostDetails)`
  margin-bottom: 21px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    order: 4;
  }
`;
