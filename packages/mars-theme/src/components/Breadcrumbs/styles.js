import { styled } from 'frontity';
import { SIZE_MOBILE } from '../../const/responsive';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  ul { 
    li {
      a {
        text-decoration: none;
        font-size: 12px;
        line-height: 15px;
        text-transform: capitalize;
        color: #282828;
        transition: all .3s;
        position: relative;
        
        &:before {
          content: '|';
          margin: 0 5px;
          font-size: 12px;
          line-height: 15px;
          color: #282828;
        }
        
        &:hover {
          color: #000000;
        }
      }
    }
    
    a[href='#'] {
      font-size: 12px;
      line-height: 15px;
      color: #969696;
      pointer-events: none;
      
      &:before {
        color: #969696;
      }

      &:hover {
        cursor: default;
        color: #969696;
      }
    }
    
    li {
      display: inline;
    
      &:nth-of-type(3) {
        display: inline-flex;
        
        a {
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          
          @media screen and (max-width: ${SIZE_MOBILE}px) {
            max-width: 150px;
          }
        }
      }
      
      &:first-of-type {
        a {
          &:before {
            display: none;
          }
        }
      }
    }
  }
`;
