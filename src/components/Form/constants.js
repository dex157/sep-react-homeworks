import Pic from './assets/bond_approve.jpg';

export const Picture = Pic;

export const Inputs = {
  inputs: {
    firstname: {
      inputName: 'Имя',
      inputValue: '',
      errors: {
        emptyMessage: 'Нужно указать имя',
        wrongMessage: 'Имя указано не верно'
      }
    },
    lastname: {
      inputName: 'Фамилия',
      inputValue: '',
      errors: {
        emptyMessage: 'Нужно указать фамилию',
        wrongMessage: 'Фамилия указана не верно'
      }
    },
    password: {
      inputName: 'Пароль',
      inputValue: '',
      errors: {
        emptyMessage: 'Нужно указать пароль',
        wrongMessage: 'Пароль указан не верно'
      }
    }
  }
};

export const Credits = {
  credits: {
    firstname: 'james',
    lastname: 'bond',
    password: '007'
  }
};

export const Errors = () => {
  var errors = {
    errors: {}
  };

  Object.keys(Inputs.inputs).map(field => (errors.errors[field] = ''));

  return errors;
};

export const initialState = {
  ...Inputs,
  ...Credits,
  ...Errors(),
  isValid: false
};
