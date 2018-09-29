import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    static defaultProps = {
        firstname: 'James',
        lastname: 'Bond',
        password: '007',
    }

    state = {
        firstname: '',
        lastname: '',
        password: '',
        errorFirstName: '',
        errorLastName: '',
        errorPasswors: '',
        formValid: false,
    }

    validSubmit = event => {
        event.preventDefault()

        const {
            firstname,
            lastname,
            password,
        } = this.state

        if (firstname) {
            (firstname === this.props.firstName)
                ? this.setState({ formValid: true })
                : this.setState({ errorFirstName: 'Имя указано не верно' })
        } else {
            this.setState({ errorFirstName: 'Нужно указать имя' })
        }

        if (lastname) {
            (lastname === this.props.lastname)
                ? this.setState({ formValid: true })
                : this.setState({ errorLastName: 'Фамилия указана не верно' })
        } else {
            this.setState({ errorLastName: 'Нужно указать фамимлию' })
        }

        if (password) {
            (password === this.props.password)
                ? this.setState({ formValid: true })
                : this.setState({ errorPasswors: 'Пароль указан не верно' })
        } else {
            this.setState({ errorPasswors: 'Нужно указать пароль' })
        }
    }

    inputChange = event => {       
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(this.state.firstname)
    }

    componentDidMount(){
        
    }


    render(){
        const { formValid } = this.state
        return (
            <div className="app-container">
                {formValid ? (
                    <Approve />
                ) : (
                    <form className="form">
                        <h1>Введите свои данные, агент</h1>
                        <p className="field">
                            <label className="field__label" htmlFor="firstname">
                                <span className="field-label">Имя</span>
                            </label>
                            <input 
                                className="field__input field-input t-input-firstname"
                                type="text"
                                name="firstname"
                                onChange={this.inputChange}
                                value={this.state.firstname}
                            />
                            <span className="field__error field-error t-error-firstname">
                                {this.state.errorFirstName}
                                {/* Имя указано не верно */}
                            </span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="lastname">
                                <span className="field-label">Фамилия</span>
                            </label>
                            <input 
                                className="field__input field-input t-input-lastname"
                                type="text"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.inputChange}
                            />
                            <span className="field__error field-error t-error-lastname">
                                {this.state.errorLastName}
                                {/* Фамилия указана не верно */}
                            </span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="password">
                                <span className="field-label">Пароль</span>
                            </label>
                            <input 
                                className="field__input field-input t-input-password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.inputChange}
                            />
                            <span className="field__error field-error t-error-password">
                                {this.state.errorPasswors}
                                {/* Пароль указан не верно */}
                            </span>
                        </p>
                        <div className="form__buttons">
                            <input onClick={this.validSubmit} className="button t-submit" type="submit" value="Проверить"/>
                        </div>
                    </form>
                )}
            </div>
        )
    }
}

class Approve extends Component {

    render() {
        return (
            <img scr="#" alt="Картинка James Bond" className="t-bond-image"/>
        )
    }
}


export default Form