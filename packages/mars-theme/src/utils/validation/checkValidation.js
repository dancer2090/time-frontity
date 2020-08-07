export const fieldRequired = [
  {
    reg: '',
    validation: (val) => val.length === 0,
    message: 'Field is required',
  },
];

export const emailCheck = [
  {
    reg: '',
    validation: (val, compare) => val === compare,
    message: 'Please, fill the form',
  },
  {
    reg: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    validation: (val, compare) => compare.test(val) === false,
    message: 'Please, enter correct email',
  },
];
