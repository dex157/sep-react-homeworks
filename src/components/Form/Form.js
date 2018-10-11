import React, { Component } from 'react';
import ImageBond from './assets/bond_approve.jpg'
import './Form.css';

const validParams = {
    firstname: 'james',
    lastname: 'bond',
    password: '007'
};

const fields = [
    {
        label: 'Имя',
        type: 'text',
        name: 'firstname',
        errorEmpty: 'Нужно указать имя',
        errorValid: 'Имя указано не верно',
    },
    {
        label: 'Фамилия',
        type: 'text',
        name: 'lastname',
        errorEmpty: 'Нужно указать фамилию',
        errorValid: 'Фамилия указана не верно',
    },
    {
        label: 'Пароль',
        type: 'password',
        name: 'password',
        errorEmpty: 'Нужно указать пароль',
        errorValid: 'Пароль указан не верно',
    },
]


class Form extends Component {
    // constructor(props) {
    // super(props);
    //     this.state = {


    //     };
    // }

    state = {
        firstname: '',
        lastname: '',
        password: '',
        errors: {
            firstname: '',
            lastname: '',
            password: '',
            formValid: false
        }
    };

    // Валидатор возвращает пустой текст или текст ошибки
    validation(fieldName) {
        const fieldsItem = fields.find(el => el.name === fieldName);
        if (this.state[fieldName]) {
            if (this.state[fieldName] === validParams[fieldName]) {
                return false;
            } else {
                return fieldsItem.errorValid;
            }
        } else {
            return fieldsItem.errorEmpty;
        }
    }


    handleOnSubmit = event => {

        event.preventDefault();
        let errors = {};

        for (const item of fields) {
            if (this.validation(item.name)) {
                errors[item.name] = this.validation(item.name);
            }
        }
        if (Object.keys(errors).length !== 0) {
            this.setState(state => ({
                errors: {
                    ...state.errors,
                    ...errors
                }
            }));
        } else {
            this.setState({
                formValid: true
            });
        }
    };

    handleOnChange = event => {
        // Должен быть один, примерно такой
        this.setState({
            errors: {
                firstname: '',
                lastname: '',
                password: ''
            },
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { formValid } = this.state;
        return (
            <div className="app-container">
                {formValid ? (
                    <Approve />
                ) : (
                        <form className="form">
                            <h1> Введите свои данные, агент </h1>
                            {fields.map(fieldName => (
                                <p className="field" key={fieldName.name}>
                                    <label className="field__label" htmlFor={fieldName.name}>
                                        <span className="field-label"> {fieldName.label} </span>
                                    </label>
                                    <input
                                        className={`field__input field-input t-input-${
                                            fieldName.name
                                            }`}
                                        type={fieldName.type}
                                        name={fieldName.name}
                                        onChange={this.handleOnChange}
                                        value={this.state[fieldName.name]}
                                    />
                                    <span
                                        className={`field__error field-error t-error-${
                                            fieldName.name
                                            }`}
                                    >
                                        {this.state.errors[fieldName.name]}
                                    </span>
                                </p>
                            ))}
                            <div className="form__buttons">
                                <input
                                    onClick={this.handleOnSubmit}
                                    className="button t-submit"
                                    type="submit"
                                    value="Проверить"
                                />
                            </div>
                        </form>
                    )}
            </div>
        );
    }
}

class Approve extends Component {
    render() {
        return (
            <img scr={ImageBond} alt="Картинка James Bond" className="t-bond-image" />
        );
    }
}

export default Form;