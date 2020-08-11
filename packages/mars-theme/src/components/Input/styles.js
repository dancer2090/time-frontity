import { styled } from 'frontity';

export const Field = styled.input`
  height: 49px;
  background: #FFFFFF;
  border: 0.5px solid #969696;
  width: 100%;
  padding: 0 13px;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  font-family: 'Montserrat',sans-serif;
  
  ${({ error }) => (
    error
      ? 'border-color: red;'
      : null
  )}
  
  &::placeholder {
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const TextArea = styled.textarea`
  background: #FFFFFF;
  min-height: 49px;
  height: auto;
  border: 0.5px solid #969696;
  width: 100%;
  resize: none;
  overflow: hidden;
  padding: 10px 13px;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  font-family: 'Montserrat',sans-serif;
  
  ${({ error }) => (
    error
      ? 'border-color: red;'
      : null
  )}
  
  &::placeholder {
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;
