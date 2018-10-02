import Pic from './assets/bond_approve.jpg';

export const Picture = Pic;

export const initialState = {
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
  },
  errors: {
    firstname: '',
    lastname: '',
    password: ''
  },
  credits: {
    firstname: 'james',
    lastname: 'bond',
    password: '007'
  },
  isValid: false
};
