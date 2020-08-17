import React, { useState } from 'react';
import {
  Icon,
  Wrapper,
  SocialLink,
  SocialIcon,
} from './styles';
import Modal from '../Modal/Modal';
import telegram from '../../img/svg/telegram-shared.svg';
import facebook from '../../img/svg/facebook-shared.svg';
import messenger from '../../img/svg/messager-shared.svg';
import viber from '../../img/svg/viber-shared.svg';
import linkedin from '../../img/svg/linkedin-shader.svg';
import twitter from '../../img/svg/twitter-shared.svg';
import Translator from '../Translator/Translator';

const Shared = ({ link }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Icon
        onClick={() => setShowModal(true)}
        name="shared"
      />
      <Modal
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
        renderTitle={() => <Translator id="sharedTitle" />}
      >
        <Wrapper>
          <SocialLink
            href={`https://t.me/share/url?url=${link}`}
            target="__blank"
          >
            <SocialIcon src={telegram} />
          </SocialLink>
          <SocialLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
            target="__blank"
          >
            <SocialIcon src={facebook} />
          </SocialLink>
          <SocialLink
            href={`fb-messenger://share/?link=${link}`}
            target="__blank"
          >
            <SocialIcon src={messenger} />
          </SocialLink>
          <SocialLink
            href={`viber://forward?text=${link}`}
            target="__blank"
          >
            <SocialIcon src={viber} />
          </SocialLink>

          <SocialLink
            href={`https://www.linkedin.com/cws/share?url=${link}`}
            target="__blank"
          >
            <SocialIcon src={linkedin} />
          </SocialLink>
          <SocialLink
            href={`https://twitter.com/share?text=&amp;url=${link}`}
            target="__blank"
          >
            <SocialIcon src={twitter} />
          </SocialLink>
        </Wrapper>
      </Modal>
    </>
  );
};

export default Shared;
