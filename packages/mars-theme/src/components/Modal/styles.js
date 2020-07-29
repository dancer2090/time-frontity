import { styled, css } from 'frontity';

export const Content = styled.div`
  top: '50%';
  left: '50%';
  right: 'auto';
  bottom: 'auto';
  marginRight: '-50%';
  transform: 'translate(-50%, -50%)';
  padding: '0';
  borderRadius: 'none';
`;
export const CModal = styled.div`
  padding: 40px 50px;
  max-width: 420px;
  background-color: #fff;
  color: #222222;

  @media (max-width: 600px) {
    padding: 30px 40px;
  }
`;
export const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 27px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: #a6c950;
`;
export const ModalText = styled.div`
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 30px;
  text-align: center;
  & a{
    color: #a6c950;
    font-weight: 700;
  }
  & .desctop{
    display: inline-block;
  }
  & .mobile{
    display: none;
  }
  @media (max-width: 991px){
    & .desctop{
    display: none;
    }
    & .mobile{
      display: inline-block;
    }
  }
`;
export const ModalButtonWrapper = styled.div`
    padding-top: 24px;
    width: 100%;
    text-align: center;
`;
export const ModalButton = styled.button`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: transparent;
  border: 0px;
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  & svg{
    width: 24px;
    height: 24px;
    path{
      fill: #77716D;
    }
  }
  &:hover {
    background-color: linear-gradient(274.43deg,#FFB03A 3.6%,#FF9233 97.69%);
    opacity: 1;
  }
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.75);
  z-index: 10;
`;