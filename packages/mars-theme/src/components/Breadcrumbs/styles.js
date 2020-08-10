import { styled } from 'frontity';

export const Wrapper = styled.div`
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
    
      &:first-child {
        a {
          &:before {
            display: none;
          }
        }
      }
    }
  }
`;
