import React, {Component} from 'react';
import './Form.css';
import img from './assets/bond_approve.jpg'
const agent = {
    firstName: {value: 'james', error: {empty: 'Нужно указать имя', wrong: 'Имя указано не верно'}},
    lastName: {value: 'bond', error: {empty: 'Нужно указать фамилию', wrong: 'Фамилия указана не верно'}},
    password: {value: '007', error: {empty: 'Нужно указать пароль', wrong: 'Пароль указан не верно'}}
}

export default class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        password: '',
        errors: {},
        validate: false
    }

    changeInputValue =  event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value, errors: {}});
    }

    onSubmitForm = event => {
        event.preventDefault();

        const {errors} = this.state;

        Object.keys(agent).forEach(element => {
            const input = this.state[element];
            const elem = agent[element];

            if (input.toLowerCase() !== elem.value) {

                if (input === '') {
                    errors[element] = elem.error.empty;
                    
                } else {
                    errors[element] = elem.error.wrong;
                }
            } else {
                delete errors[element];
            }
        });

        const errorsLength = Object.keys(errors).length;

        this.setState({ errors, validate: errorsLength === 0 })
    }

    render () {

        const {firstName, lastName, password, errors, validate} = this.state;

        if (!validate) {
            return (
                <form className="form">
                    <h1>Введите свои данные, агент</h1>
                    
                    <p className="field">
                        <label htmlFor="firstName" className="field__label">
                            <span className="field-label">Имя</span>
                        </label>
                        <input type="text" name="firstName" value={firstName} onChange={this.changeInputValue} className="field-input field__input t-input-firstname"/>
                        <span className="field-error field__error t-error-firstname">{errors.firstName}</span>
                    </p>
    
                    <p className="field">
                        <label htmlFor="lastName" className="field__label">
                            <span className="field-label">Фамилия</span>
                        </label>
                        <input type="text" name="lastName" value={lastName} onChange={this.changeInputValue} className="field-input field__input t-input-lastname"/>
                        <span className="field-error field__error t-error-lastname">{errors.lastName}</span>
                    </p>
    
                    <p className="field">
                        <label htmlFor="password" className="field__label">
                            <span className="field-label">Пароль</span>
                        </label>
                        <input type="password" name="password" value={password} onChange={this.changeInputValue} className="field-input field__input t-input-password"/>
                        <span className="field-error field__error t-error-password">{errors.password}</span>
                    </p>
    
                    <div className="form__buttons">
                        <input type="submit" onClick={this.onSubmitForm} className="button t-submit" value="Проверить"/>
                    </div>
                </form>
            )
        } else {
            return <img src={img} alt="james" className="t-bond-image" />
        }
    }
}