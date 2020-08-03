import { styled } from 'frontity';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: none;
  text-decoration: none;
  transition: all .3s ease-in-out;
  
  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const FrameBlock = styled.div`
  width: 100%;
  height: 206px;
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
