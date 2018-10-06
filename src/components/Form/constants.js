export const values = [{
    emptyInput: 'Нужно указать имя',
    invalidInput: 'Имя указано не верно',
    value: 'James'
  },
  {
    emptyInput: 'Нужно указать фамилию',
    invalidInput: 'Фамилия указана не верно',
    value: 'Bond'
  },
  {
    emptyInput: 'Нужно указать пароль',
    invalidInput: 'Пароль указан не верно',
    value: '007'
  },
];

export const initialState = {
    firstName: {
        value: '',
        error: ''
      },
      lastName: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      },
      isValid: false
}