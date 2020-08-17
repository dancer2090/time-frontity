import React, { useState } from 'react';
import {
  Wrapper,
  TopNavigation,
  ContactsWrapper,
  Information,
  InformationRow,
  InformationName,
  InformationValue,
  InformationLink,
  DepartmentAdvertising,
  InformationTitle,
  FormSubmit,
  FormTitle,
  FormInput,
  FormButton,
  FormButtonWrapper,
  Message,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';
import Title from '../../../../components/Title';
import Input from '../../../../components/Input';
import { fieldRequiredValidation, validateFieldEmail } from '../../../../utils/validation/validation';
import Translator from '../../../../components/Translator/Translator';

const ContactsTemplate = () => {
  // components state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSendButton, setShowSendButton] = useState(false);
  const [showSendMessage, setShowSendMessage] = useState(false);

  // errors
  const [hasNameError, setHasNameError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasMessageError, setHasMessageError] = useState(false);

  const isShowSendButton = (type) => {
    if (type === 'focus') {
      setShowSendButton(true);
    } else if ('blur') {
      if (message.length === 0) {
        setShowSendButton(false);
      }
    }
  };

  const validateForm = () => {
    console.log('validate');
    const getNameError = fieldRequiredValidation(name);
    const getEmailError = validateFieldEmail(email);
    const getMessageError = fieldRequiredValidation(message);

    setHasNameError(getNameError);
    setHasMessageError(getMessageError);
    setHasEmailError(getEmailError);

    return getNameError.length === 0
        && getMessageError.length === 0
        && getEmailError.length === 0;
  };

  const sendForm = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      formData.append('author_name', name);
      formData.append('content', message);
      formData.append('email', message);

      setName('');
      setMessage('');
      setEmail('');
      setShowSendMessage(false);
      setShowSendButton(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: 'Контакты', link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <Title>
          <Translator id="contactsTitle" />
        </Title>
        <ContactsWrapper>
          <Information>
            <InformationRow>
              <InformationName>
                <Translator id="addressLabel" />
              </InformationName>
              <InformationValue>
                Харьков, ул....
              </InformationValue>
            </InformationRow>
            <InformationRow>
              <InformationName>
                <Translator id="telephoneLabel" />
              </InformationName>
              <InformationLink href="tel:+3800000000">
                +3800000000
              </InformationLink>
            </InformationRow>
            <InformationRow>
              <InformationName>
                <Translator id="emailLabel" />
              </InformationName>
              <InformationLink href="mailto:test@test.com">
                test@test.com
              </InformationLink>
            </InformationRow>
            <DepartmentAdvertising>
              <InformationTitle>
                <Translator id="contactsDepartmentTitle" />
              </InformationTitle>
              <InformationRow>
                <InformationName>
                  <Translator id="telephoneLabel" />
                </InformationName>
                <InformationLink href="tel:+3800000000">
                  +3800000000
                </InformationLink>
              </InformationRow>
              <InformationRow>
                <InformationName>
                  <Translator id="emailLabel" />
                </InformationName>
                <InformationLink href="mailto:test@test.com">
                  test@test.com
                </InformationLink>
              </InformationRow>
            </DepartmentAdvertising>
          </Information>
          <FormSubmit onSubmit={sendForm}>
            <FormTitle>
              <Translator id="contactsFormTitle" />
            </FormTitle>
            <FormInput>
              <Input
                placeholder="Имя"
                value={name}
                error={hasNameError}
                onChange={(e) => setName(e.target.value)}
              />
            </FormInput>
            <FormInput>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                error={hasEmailError}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormInput>
            <FormInput>
              <Input
                placeholder="Сообщение..."
                value={message}
                error={hasMessageError}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => isShowSendButton('focus')}
                onBlur={() => isShowSendButton('blur')}
              />
            </FormInput>
            {
              showSendMessage && (
                <Message>
                  <Translator id="sendContacts" />
                </Message>
              )
            }
            <FormButtonWrapper>
              {
                showSendButton && (
                  <FormButton type="submit">
                    <Translator id="sendButtonTitle" />
                  </FormButton>
                )
              }
            </FormButtonWrapper>
          </FormSubmit>
        </ContactsWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactsTemplate;
