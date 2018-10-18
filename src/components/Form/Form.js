import React, { Component } from 'react';
import './Form.css';
import bondApprove from './assets/bond_approve.jpg';

export default class Form extends Component {

    state = {
        errors: {
            firstname: "",
            lastname: "",
            password: ""
        },
        isSubmited: false,
        values: {
            firstname: "",
            lastname: "",
            password: ""
        },

    };

    emptyErrors = {
        firstname: "",
        lastname: "",
        password: ""
    }; 

    render () {
        if (!this.state.isSubmited){
        return (
            <div className = "app-container">
                <form className = "form" onSubmit = {this.formSubmit}>
                    <h1>Введите свои данные, агент</h1>
                        <p key = "firstname" className = "field">
                            <label className = "field__label" htmlFor = "firstname">
                                <span className = "field-label">Имя</span>
                            </label>
                            <input value = {this.state.values.firstname} className = "field__input field-input t-input-firstname" type="text" name="firstname" onChange = {this.firstnameChange}></input>
                            <span className = "field__error field-error t-error-firstname">{this.state.errors.firstname}</span>
                        </p>
                        <p key = "lastname" className = "field">
                            <label className = "field__label" htmlFor = "lastname">
                                <span className = "field-label">Фамилия</span>
                            </label>
                            <input value = {this.state.values.lastname} className = "field__input field-input t-input-lastname" type="text" name="lastname" onChange = {this.lastnameChange}></input>
                            <span className = "field__error field-error t-error-lastname">{this.state.errors.lastname}</span>
                        </p>
                        <p key = "password" className = "field">
                            <label className = "field__label" htmlFor = "password">
                                <span className = "field-label">Пароль</span>
                            </label>
                            <input value = {this.state.values.password} className = "field__input field-input t-input-password" type="text" name="password" onChange = {this.passwordChange}></input>
                            <span className = "field__error field-error t-error-password">{this.state.errors.password}</span>
                        </p>

                        <div className = "form__buttons">
                            <input type = "submit" className = "button t-submit" value = "Проверить"></input>
                        </div>
                </form>
            </div>
        )
        } else {
            return (
                <div className = "app-container">
                    <img src = {bondApprove} alt="bond approve" className = 't-bond-image'></img>
                </div>
            );
        }
    }

    firstnameChange = (event) => {
        this.setState({values: Object.assign({}, this.state.values, {firstname: event.target.value}), errors: this.emptyErrors});

        // this.setState( ({values}) => ({
        //     values: Object.assign({}, values, {firstname: event.target.value})
        // }));
    }

    lastnameChange = (event) => {
        this.setState({values: Object.assign({}, this.state.values, {lastname: event.target.value}), errors: this.emptyErrors});
    }

    passwordChange = (event) => {
        this.setState({values: Object.assign({}, this.state.values, {password: event.target.value}), errors: this.emptyErrors});
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.checkFields();
    }

    checkFields () {
        let errObj = {};
        
        errObj['firstname'] = !this.state.values.firstname ? 'Нужно указать имя' : this.state.values.firstname.toUpperCase() !== 'JAMES' ? 'Имя указано не верно' : '';
        errObj['lastname'] = !this.state.values.lastname ? 'Нужно указать фамилию' : this.state.values.lastname.toUpperCase() !== 'BOND' ? 'Фамилия указана не верно' : '';
        errObj['password'] = !this.state.values.password ? 'Нужно указать пароль' : this.state.values.password.toUpperCase() !== '007' ? 'Пароль указан не верно' : '';

        if (errObj['firstname'] || errObj['lastname']  || errObj['password']) {
            this.setState({errors: Object.assign({}, this.state.errors, errObj), isSubmited: false});
        } else {
            this.setState({isSubmited:true});
        }
    }

}

 