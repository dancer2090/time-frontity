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
import gmail from '../../img/svg/gmail-shared.svg';
import shapchat from '../../img/svg/shapchat-shared.svg';

const Shared = () => {
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
        title="Поделиться"
      >
        <Wrapper>
          <SocialLink
            href="https://t.me/share/url?url="
            target="__blank"
          >
            <SocialIcon src={telegram} />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/sharer/sharer.php?u="
            target="__blank"
          >
            <SocialIcon src={facebook} />
          </SocialLink>
          <SocialLink
            href="http://m.me/"
            target="__blank"
          >
            <SocialIcon src={messenger} />
          </SocialLink>
          <SocialLink
            href="viber://forward?text="
            target="__blank"
          >
            <SocialIcon src={viber} />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/cws/share?url="
            target="__blank"
          >
            <SocialIcon src={linkedin} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/share?text=&amp;url="
            target="__blank"
          >
            <SocialIcon src={twitter} />
          </SocialLink>
          <SocialLink
            href="https://mail.google.com/mail/?view=cm&"
            target="__blank"
          >
            <SocialIcon src={gmail} />
          </SocialLink>
          <SocialLink
            href="https://www.snapchat.com/add/joshconstine"
            target="__blank"
          >
            <SocialIcon src={shapchat} />
          </SocialLink>
        </Wrapper>
      </Modal>
    </>
  );
};

export default Shared;
