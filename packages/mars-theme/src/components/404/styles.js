import { styled } from 'frontity';
import { SIZE_MOBILE } from '../../const/responsive';


export const Wrapper = styled.div`
  padding: 100px 0;
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 60px 0;
  }
`;

export const TitleError = styled.h2`
  font-size: 170px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 50px;
  
  span {
    color: #d63434;
    font-style: italic;
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    font-size: 125px;
    margin-bottom: 25px;
  }
`;

export const Description = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  color: #222222;

  span {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  a {
    color: black;
    text-decoration: none;
    transition: all .3s;
    position: relative;
    
    &:before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      top: calc(100% + 2px);
      left: 50%;
      transform: translateX(-50%);
      background-color: black;
      transition: all .3s;
    }
    
    &:hover {
      &:before {
        width: 0;
      }
    }
  }
  
  @media screen and (max-width: ${SIZE_MOBILE}px) {
    padding: 0 17px;
    font-size: 16px;
    line-height: 20px;
    
    span {
      font-size: 16px;
      line-height: 20px;
    }
    
    a {
      margin-top: 15px;
      display: inline-block;
    }
  }
`;
