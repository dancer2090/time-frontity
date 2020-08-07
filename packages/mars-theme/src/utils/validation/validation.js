import {
  fieldRequired,
  emailCheck,
} from './checkValidation';

export const fieldRequiredValidation = (value) => {
  const error = [];
  fieldRequired.forEach((el) => {
    if (el.validation(value, el.reg)) error.push(el.message);
  });

  return error.length ? error[0] : '';
};

export const validateFieldEmail = (email) => {
  const error = [];

  emailCheck.forEach((el) => {
    if (el.validation(email, el.reg)) error.push(el.message);
  });

  return error.length ? error[0] : '';
}
