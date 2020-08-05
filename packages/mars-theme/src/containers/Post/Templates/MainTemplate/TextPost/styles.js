import { styled } from 'frontity';

export const Post = styled.div`
  width: 100%;
  margin-bottom: 43px;
  padding: 0 6px 0 5px;

  &:last-child {
    margin-bottom: 0;
  } 
  
  .post-name {
    font-size: 16px;
    line-height: 24px;
    color: #282828;
    display: inline-block;
    margin-bottom: 8px;
    text-decoration: none;
    transition: all .3s ease-in-out;
    
    &:hover {
      color: #000000;
    }
  }
  
  .post-author {
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
    
    transition: all .3s ease-in-out;
    
    &:hover {
      color: #2d2d2d;
    }
  }
`;
