import React, { useState } from 'react';
import {
  Wrapper,
  GIconMessage,
  Label,
  ButtonWrapper,
  Button,
  MessageConfirm,
} from './styles';
import Input from '../Input';
import Modal from '../Modal/Modal';
import { validateFieldEmail } from '../../utils/validation/validation';

const SubscribeNews = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  const subscribeNews = () => {
    const getEmailError = validateFieldEmail(email);

    setEmailError(getEmailError);

    if (getEmailError.length === 0) {
      setShowConfirmMessage(true);
    }
  };

  const closeModal = () => {
    setEmail('');
    setShowModal(false);
    setShowConfirmMessage(false);
  };

  return (
    <>
      <Wrapper onClick={() => setShowModal(!showModal)}>
        <GIconMessage name="mail" />
        <Label>
          Подписаться на новости
        </Label>
      </Wrapper>

      <Modal
        title={!showConfirmMessage ? 'Мы можем оповещать вас о самых последних событиях' : null}
        isOpen={showModal}
        handleClose={closeModal}
      >
        {
          !showConfirmMessage
            ? (
              <>
                <Input
                  placeholder="Email..."
                  value={email}
                  error={emailError}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ButtonWrapper>
                  <Button onClick={subscribeNews}>
                    Подписаться
                  </Button>
                </ButtonWrapper>
              </>
            )
            : <MessageConfirm>Спасибо за подписку!</MessageConfirm>
        }

      </Modal>
    </>
  );
};

export default SubscribeNews;
