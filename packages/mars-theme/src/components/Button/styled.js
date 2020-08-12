import { styled, css } from 'frontity';

export const StyledButton = styled.button`
  height: 46px;
  background: #F2F2F2;
  border: 1.5px solid #666666;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #666666;
  padding: 0 36px;
  cursor: pointer;
  position: relative;
  transition: all .3s ease-in-out;
  ${(props) => props.hidden && css`
    display: none;
  `}
  &:before {
    content: "";
    width: calc(100% + 2.5px);
    height: calc(100% + 2.5px);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 0.5px solid transparent;
    background: transparent;
    transition: all .3s ease-in-out;
  }
  
  &:hover {
    border-color: rgba(102, 102, 102, 0.75);
    color: rgba(102, 102, 102, 0.75);
    
    &:before {
      border-color: rgba(102, 102, 102, 0.75);
    }
  }
`;
