export const fields = [
    {
        name: 'firstname',
        type: 'text',
        nameLabel: 'Имя',
        correct: 'james',
        message: {
            empty: 'Нужно указать имя',
            incorrect: 'Имя указано не верно'
        }
    },
    {
        name: 'lastname',
        type: 'text',
        nameLabel: 'Фамилия',
        correct: 'bond',
        message: {
            empty: 'Нужно указать фамилию',
            incorrect: 'Фамилия указана не верно'
        }
    },
    {
        name: 'password',
        type: 'password',
        nameLabel: 'Пароль',
        correct: '007',
        message: {
            empty: 'Нужно указать пароль',
            incorrect: 'Пароль указан не верно'
        }
    }
];
