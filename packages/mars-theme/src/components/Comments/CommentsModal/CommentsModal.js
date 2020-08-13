import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import Modal from '../../Modal/Modal';
import {
  Wrapper,
  Header,
  Label,
  Content,
  FormWrapper,
  CommentsInput,
  SendButton,
  Message,
} from './styles';
import CommentPost from '../CommentPost';
import Input from '../../Input';
import { fieldRequiredValidation } from '../../../utils/validation/validation';
import Translator from '../../Translator/Translator';

const CommentsModal = ({
  isOpen = false,
  handleClose,
  state,
  actions,
  libraries,
}) => {
  // Post Id for single post
  const dataP = state.source.get(state.router.link);
  const postId = dataP.id;

  // components state
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [showSendButton, setShowSendButton] = useState(false);
  const [commentsArray, setCommentsArray] = useState([]);
  const [showSendMessage, setShowSendMessage] = useState(false);
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

  useEffect(() => {
    libraries.source.api.get({
      endpoint: 'comments',
      params: { post: postId, _embed: false, per_page: 100 },
    })
      .then((response) => {
        response.json().then((data) => {
          setCommentsArray(data);
        });
      });
  }, []);

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
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      formData.append('author_name', name);
      formData.append('content', comments);
      formData.append('post', postId);

      actions.theme.sendComment({ formData })
        .then(() => {
          setShowSendMessage(true);

          setTimeout(() => {
            setShowSendMessage(false);
          }, 2500);
        });
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
            {
              commentsArray.length === 0
                ? (
                  <strong><Translator id="noComments" /></strong>
                )
                : commentsArray.map((item, index) => (
                  <CommentPost key={index} data={item} />
                ))
            }
          </Content>
        </Header>
        {
          showSendMessage && (
            <Message>
              <Translator id="sendCommentsMessage" />
            </Message>
          )
        }
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

export default connect(CommentsModal);
