import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import {
  Wrapper,
  Header,
  Label,
  Content,
  FormWrapper,
  CommentsInput,
  SendButton,
} from './styles';
import CommentPost from '../CommentPost';
import Input from '../../Input';
import { fieldRequiredValidation } from '../../../utils/validation/validation';

const CommentsModal = ({ isOpen = false, handleClose }) => {
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [showSendButton, setShowSendButton] = useState(false);
  // errors
  const [hasNameError, setHasNameError] = useState(false);
  const [hasCommentsError, setCommentsError] = useState(false);

  const isShowSendButton = (type) => {
    if (type === 'focus') {
      setShowSendButton(true);
    } else if ('blur') {
      if (comments.length === 0) {
        setShowSendButton(false);
      }
    }
  };

  const validateForm = () => {
    const getNameError = fieldRequiredValidation(name);
    const getCommentsError = fieldRequiredValidation(comments);

    setHasNameError(getNameError);
    setCommentsError(getCommentsError);

    return getNameError.length === 0 && getCommentsError.length === 0;
  };

  const sendForm = (event) => {
    event.preventDefault();

    if (validateForm) {
      setName('');
      setComments('');
    }
  };

  return (
    <Modal isOpen={isOpen} fullSize handleClose={handleClose}>
      <Wrapper>
        <Header>
          <Label>Коментарии: 999</Label>
          <Content>
            <CommentPost />
            <CommentPost />
            <CommentPost />
            <CommentPost />
            <CommentPost />
          </Content>
        </Header>
        <FormWrapper>
          <Input
            placeholder="Имя"
            value={name}
            error={hasNameError}
            onChange={(e) => setName(e.target.value)}
          />
          <CommentsInput>
            <Input
              placeholder="Добавьте коментарий..."
              textarea
              value={comments}
              error={hasCommentsError}
              onChange={(e) => setComments(e.target.value)}
              onFocus={() => isShowSendButton('focus')}
              onBlur={() => isShowSendButton('blur')}
            />
            {
              showSendButton && (
                <SendButton name="send" onClick={sendForm} />
              )
            }
          </CommentsInput>
        </FormWrapper>
      </Wrapper>
    </Modal>
  );
};

export default CommentsModal;
