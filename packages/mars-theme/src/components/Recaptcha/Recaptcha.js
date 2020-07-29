import React, { useEffect } from 'react';
import { connect } from 'frontity';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Recaptcha = ({ actions }) => {

  const { executeRecaptcha } = useGoogleReCaptcha();

  const tokenControl = async () => {
    const token = await executeRecaptcha();
    if (token) {
      actions.theme.setRecaptchaToken(token);
    }
  };

  useEffect(() => {
    tokenControl();
  }, []);

  return (
    <></>
  );
};

export default connect(Recaptcha);
