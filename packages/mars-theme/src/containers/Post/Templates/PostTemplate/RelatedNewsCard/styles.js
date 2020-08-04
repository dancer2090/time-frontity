import { styled } from 'frontity';

export const Card = styled.div`
  background: white;
`;

export const Frame = styled.div`
  height: 140px;
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 7px 8px 10px 9px;
  
  a {
    font-weight: 600;
    font-size: 13px;
    line-height: 131.4%;
    text-decoration: none;
    letter-spacing: 0.03em;
    color: #000000;
  }
`;
