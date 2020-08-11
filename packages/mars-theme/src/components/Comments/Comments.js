import React, { useState } from 'react';
import {
  Wrapper,
  Form,
  GInput,
  Label,
  SendBlock,
  SendButton,
  CommentsList,
} from './styles';
import CommentPost from './CommentPost';
import {
  fieldRequiredValidation,
} from '../../utils/validation/validation';

const Comments = () => {
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
    <Wrapper>
      <Form onSubmit={sendForm}>
        <Label>
          Коментарии:  999
        </Label>
        <GInput
          placeholder="Имя"
          value={name}
          error={hasNameError}
          onChange={(e) => setName(e.target.value)}
        />
        <GInput
          placeholder="Добавьте коментарий..."
          value={comments}
          error={hasCommentsError}
          textarea
          onChange={(e) => setComments(e.target.value)}
          onFocus={() => isShowSendButton('focus')}
          onBlur={() => isShowSendButton('blur')}
        />
        {
          showSendButton && (
            <SendBlock>
              <SendButton type="submit">отправить</SendButton>
            </SendBlock>
          )
        }
      </Form>
      <CommentsList>
        {
          [1, 2, 3, 4, 5].map((item) => (
            <CommentPost key={item} />
          ))
        }
      </CommentsList>
    </Wrapper>
  );
};

export default Comments;
