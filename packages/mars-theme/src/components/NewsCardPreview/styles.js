import { styled, css } from 'frontity';
import {SIZE_LAPTOP, SIZE_MOBILE} from '../../const/responsive';

export const Card = styled.div`
  width: 100%;
`;

export const FrameBlock = styled.div`
  ${({ size }) => {
    if (size === 'medium') {
      return css`
        height: 208px;
        
        & + div {
          padding: 18px 19px;
          
          a {
            font-size: 16px;
            line-height: 20px;
          }
        }
      `;
    }

    return 'height: 286px;';
  }}
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 200px;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    height: 207px;
  }
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  background: white;
  padding: 19px 22px;
  
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 141.9%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #000000;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 18px;
    
    a {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
