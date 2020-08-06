import { styled } from 'frontity';
import PostDetails from '../PostDetails';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 33px;
`;

export const LeftContent = styled.div`
  width: 477px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 37px;
`;

export const Name = styled.h1`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.03em;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 15px;
`;

export const Quote = styled.p`
  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 25px;
`;

export const LeftBottomContent = styled.div``;

export const GPostDetails = styled(PostDetails)`
   border-top: 1px solid #969696;
   padding: 15px 23px 0 23px;
   margin-bottom: 38px;
`;

export const TextDescription = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  padding: 0 17px;
  color: #000000;
`;

export const RightContent = styled.div`
  width: 531px;
`;

export const FrameBlock = styled.div`
  max-height: 617px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageDescription = styled.span`
  display: block;
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #969696;
`;
