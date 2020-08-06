import {
  fieldRequired,
} from './checkValidation';

export const fieldRequiredValidation = (value) => {
  const error = [];
  fieldRequired.forEach((el) => {
    if (el.validation(value, el.reg)) error.push(el.message);
  });

  return error.length ? error[0] : '';
};
