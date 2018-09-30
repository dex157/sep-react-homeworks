import React from 'react';
import './Form.css';
import Image from './assets/bond_approve.jpg';

const currectValue = {
    firstname: 'James',
    lastname: 'Bond',
    password: '007',
};

class Form extends React.Component {
    state = {
        fields: {
            firstname: {
                labelName: 'Имя',
                type: 'text',
                inputName: 'firstname',
                value: '',
                error: {
                    incorrectMsg: 'Имя указано не верно',
                    emptyMsg: 'Нужно указать имя'
                }
            },
            lastname: {
                labelName: 'Фамилия',
                type: 'text',
                inputName: 'lastname',
                value: '',
                error: {
                    incorrectMsg: 'Фамилия указана не верно',
                    emptyMsg: 'Нужно указать фамилию'
                }
            },
            password: {
                labelName: 'Пароль',
                type: 'password',
                inputName: 'password',
                value: '',
                error: {
                    incorrectMsg: 'Пароль указан не верно',
                    emptyMsg: 'Нужно указать пароль'
                }
            },
        },
        errorMsg: {
            firstname: '',
            lastname: '',
            password: ''
        },
        authenticated: false
    }

    handleChange = (event) => {
        const { fields, errorMsg } = this.state;

        this.setState({ fields: {
            ...fields,
                [event.target.name]: {
                    ...fields[event.target.name],
                    value: event.target.value
                }
            },
            errorMsg: { ...errorMsg,
                firstname: '',
                lastname: '',
                password: ''
            }
        })
    }

    validate = (name) => {
        const { fields } = this.state;
        const field = fields[name];

        switch (field['value']) {
            case currectValue[field['inputName']]:
                return '';
            case '':
                return field['error'].emptyMsg;
            default:
                return field['error'].incorrectMsg;
        }
    }

    handleSubmit = event => {
        const { errorMsg } = this.state;

        if (event && event.type === 'submit') {
            event.preventDefault();
        }

        Object.keys(errorMsg).map((error) => (
            errorMsg[error] = this.validate([error])
        ));
        this.setState({
            errorMsg,
            authenticated: !errorMsg.firstname && !errorMsg.lastname && !errorMsg.password
        });
    };

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    };

    render () {
        const { fields, errorMsg, authenticated } = this.state;

        return (
            <div className='app-container'>
                { authenticated ? (
                    <img src={Image} alt='bond approve' className='t-bond-image'/>
                    ) : (
                    <form onKeyPress={this.handleKeyPress} onSubmit={this.handleSubmit}>
                        <h1>Введите свои данные, агент</h1>
                        { Object.keys(fields).map((field, key) => (
                            <p className='field' key={key}>
                                <label className='field__label'>
                                    <span className='field-label'>
                                        {fields[field].labelName}
                                    </span>
                                </label>
                                <input
                                    className={`field__input field-input t-input-${fields[field].inputName}`}
                                    type={fields[field].type}
                                    name={fields[field].inputName}
                                    onChange={this.handleChange}
                                    value={fields[field].value}
                                />
                                <span className={`field__error field-error t-error-${fields[field].inputName}`}>
                                    {errorMsg[field]}
                                </span>
                            </p>
                        ))}
                        <div className='form__buttons'>
                            <input
                                type='submit'
                                className='button t-submit'
                                value='Проверить'
                                onClick={this.handleSubmit}/>
                        </div>
                    </form>
                    )
                }
            </div>
        );
    }
}

export default Form;