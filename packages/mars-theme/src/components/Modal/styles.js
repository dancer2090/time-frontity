import { styled, css } from 'frontity';
import { SIZE_MOBILE } from '../../const/responsive';

export const Content = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: none !important;
`;

export const CModal = styled.div`
  padding: 40px 32px 50px 27px;
  max-width: 420px;
  min-width: 420px;
  min-height: 207px;
  width: 100%;
  color: #222222;
  background: #F2F2F2;
  position: relative;

  ${({ size }) => (
    size
      ? css``
      : null
  )}
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 40px 17px;
    min-width: 320px;
    
    ${({ size }) => (
    size
      ? css`
          max-width: 100%;
          min-width: 100vw;
          padding: 17px 0 0 0;
        `
      : null
  )}
  }
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  text-align: center;
  margin-bottom: 25px;
  
  @media screen and (max-width: ${SIZE_MOBILE}) {
    font-size: 13px;
    line-height: 16px;
  }
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

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalButton = styled.button`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: transparent;
  border: 0;
  padding: 0;
  position: absolute;
  top: 15px;
  right: 18px;
  cursor: pointer;
  
  &:active {
    outline: none;
  }
  
  & svg{
    width: 13px;
    height: 13px;
    fill: #969696;
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
