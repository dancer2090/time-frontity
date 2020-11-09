import { styled, css } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../const/responsive';

export const TitleBlock = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #000000;
  padding-bottom: 7px;
  border-bottom: 1px solid #969696;
  margin-bottom: 33px;
  
  ${({ size }) => (
    size === 'small'
      ? css`
        font-size: 18px;
        line-height: 22px;`
      : null
  )};
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 16px;
    line-height: 20px;
    
    ${({ size }) => (
    size === 'small'
      ? css`
          font-size: 15px;
          line-height: 18px;
          margin-bottom: 15px;`
      : null
  )}
  }
`;

export const Text = styled.span`
  display: block;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 16px;
  }
`;
