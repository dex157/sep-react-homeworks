import React from 'react';
import './Form.css';
import Image from './assets/bond_approve.jpg';
import { initialState } from './constants';
import { renderForm } from './renderForm';

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

        switch (field['value'].toLowerCase()) {
            case initialState[field['inputName']]:
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

    render () {
        const { authenticated } = this.state;

        return (
            <div className='app-container'>
                { authenticated ? (
                    <img src={Image} alt='bond approve' className='t-bond-image'/>
                ) : (
                    renderForm(this.state, this.handleSubmit, this.handleChange)
                )}
            </div>
        );
    }
}

export default Form;