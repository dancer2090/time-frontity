import { styled, css } from 'frontity';
import { SIZE_LAPTOP, SIZE_LAPTOP_SMALL, SIZE_MOBILE } from '../../const/responsive';

export const FrameBlock = styled.div`
  width: 50%;
  height: 370px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    height: 300px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    height: 183px;
  }
`;

export const Content = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 19px 49px;
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    padding: 19px 29px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 6px 29px 13px 29px ;
    width: 100%;
  }
`;


export const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 26px;
  padding-right: 10px;
  
  ${({ sizeText }) => (
    sizeText === 'small'
      ? css`
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.03em;
            padding-right: 0;
            text-transform: initial;
            margin-bottom:  17px;
          `
      : null
  )};
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 15px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 12px;
  }
  
   @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 5px;
  
  ${({ sizeText }) => (
    sizeText === 'small'
      ? css`
        font-size: 14px;
        line-height: 19px;
        text-align: center;
      `
      : null
  )};
  
  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 14px;
    line-height: 19px;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    text-align: center;
    margin-bottom: 29px;
  }
`;

export const DateBlock = styled.div`
  font-family: 'Noto Sans';
  font-size: 14px;
  line-height: 19px;
  color: #969696;
  
  ${({ sizeText }) => (
    sizeText === 'small'
      ? css`
          font-size: 13px;
          line-height: 16px;
          text-align: center;
        `
      : null
  )};
    
 @media screen and (max-width: ${SIZE_LAPTOP}px) {
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
   
  ${({ direction }) => (
    direction === 'column'
      ? css`
          flex-direction: column;
          min-height: 389px;
          
          ${FrameBlock} {
            width: 100%;
            height: 218px;
          }
          ${Content} {
            flex-grow: 2;
            width: 100%;
            padding: 19px 25px;
          }
          ${Text} {
            margin-bottom: 22px;
          }
        `
      : null
  )};
  
  ${({ verticalSmall }) => (
    verticalSmall
      ? css`
          ${FrameBlock} {
            min-height: 227px;
            height: 227px;
          }
          
          ${Content} {
            padding: 19px 35px;
            text-align: left;
          }
          
          ${Title} {
            text-align: left;
            margin-bottom: 14px;
          }
          
          ${Text} {
            text-align: left;
            margin-bottom: 10px;
          }
          
          ${DateBlock} {
            text-align: left;
          }
          
          @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
            ${Title},
            ${Text},
            ${DateBlock} {
              text-align: center;
            }
          }
        `
      : null
  )};
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Frame = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 2;
`;
