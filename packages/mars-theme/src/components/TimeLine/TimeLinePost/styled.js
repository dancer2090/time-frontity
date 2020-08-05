import { styled } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../../const/responsive';

export const Post = styled.div`
  display: block;
 
  a {
    text-decoration: none;
  }
`;

export const Category = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  text-transform: uppercase;
  margin-right: 5px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
