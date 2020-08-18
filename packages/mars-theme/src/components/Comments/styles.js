import { styled } from 'frontity';
import Input from '../Input';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  padding-bottom: 25px;
  border-bottom: 1px solid #969696;
  margin-bottom: 25px;
`;

export const Label = styled.span`
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: #000000;
  margin-bottom: 25px;
`;

export const GInput = styled(Input)`
  margin-bottom: 9px;
`;

export const SendBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const SendButton = styled.button`
  font-weight: 600;
  font-family: 'Montserrat',sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #666666;
  background-color: transparent;
  border: none;
  outline: none;
  
  &:active {
    outline: none;
  }
`;

export const CommentsList = styled.div`
  margin-bottom: 45px;
`;

export const Message = styled.div`
  font-size: 14px;
  line-height: 16px;
  margin: 10px 0;
`;
