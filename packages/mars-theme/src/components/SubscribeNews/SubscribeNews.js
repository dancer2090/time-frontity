import React, { useState } from 'react';
import { connect } from 'frontity';
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
import Translator from '../Translator/Translator';
import { translator } from '../../utils/translator';

const SubscribeNews = ({ className, lang = 'ru', actions }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  const subscribeNewsValidation = () => {
    const getEmailError = validateFieldEmail(email);

    setEmailError(getEmailError);

    return getEmailError.length === 0;
  };

  const closeModal = () => {
    setEmail('');
    setShowModal(false);
    setShowConfirmMessage(false);
  };

  const formSubmit = () => {
    if (subscribeNewsValidation()) {
      actions.theme.subscribeNews()
        .then(() => {
          setShowConfirmMessage(true);
        });
    }
  };

  return (
    <>
      <Wrapper className={className} onClick={() => setShowModal(!showModal)}>
        <GIconMessage name="mail" />
        <Label>
          <Translator id="subscribeNewsLabel" />
        </Label>
      </Wrapper>

      <Modal
        title={!showConfirmMessage ? translator(lang, 'titleSubscribeModal') : null}
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
                  <Button onClick={formSubmit}>
                    <Translator id="subscribeLabelButton" />
                  </Button>
                </ButtonWrapper>
              </>
            )
            : <MessageConfirm><Translator id="subscribeMessage" /></MessageConfirm>
        }

      </Modal>
    </>
  );
};

export default connect(SubscribeNews);
