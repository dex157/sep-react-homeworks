import React, { Component }  from 'react';
import "./Form.css"
import bondImg from "./assets/bond_approve.jpg"


class Form extends Component{
    constructor(props){
        super (props);
        this.submitButton = React.createRef();
        this.appContainer = React.createRef();
        this.state = {
            inputs:{
                firstname: '',
                lastname: '',
                password: '',
            },
            formSubmitted: false,
            firstnameErrorMessage: '',
            lastnameErrorMessage: '',
            passwordErrorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
        event.preventDefault();
        let inputs = Object.assign({}, this.state.inputs);
        inputs[event.target.name] = event.target.value;
        this.setState({
            inputs,
            firstnameErrorMessage: '',
            lastnameErrorMessage: '',
            passwordErrorMessage: ''
        });

    };

    submitForm = (requiredFields)=> {
        let validForm = requiredFields === 3 ? true : false;

        if (validForm){
            this.setState({
                formSubmitted: true
            });
        }
    };

    validateForm = (event) => {
        if (event.key === 'Enter' || event.target === this.submitButton.current) {

            let login = {
                firstname: 'james',
                lastname: 'bond',
                password: '007'
            };

            let errors = {
                firstname: {
                    wrong: 'Имя указано не верно',
                    missing: 'Нужно указать имя',
                },
                lastname: {
                    wrong: 'Фамилия указана не верно',
                    missing: 'Нужно указать фамилию',
                },
                password: {
                    wrong: 'Пароль указан не верно',
                    missing: 'Нужно указать пароль',
                }
            };
            let validRequiredFields = 0;
            for(var input in this.state.inputs){
                if(this.state.inputs[input] === ''){
                    this.setState({
                        [input+'ErrorMessage']: errors[input].missing
                    })
                }else if(this.state.inputs[input].toLowerCase() !== login[input]){
                    this.setState({
                        [input+'ErrorMessage']: errors[input].wrong
                    })
                }else{
                    this.setState({
                        [input+'ErrorMessage']: ''
                    })
                    validRequiredFields++;
                }
            }

            this.submitForm(validRequiredFields);

        }
    };

    bond = () =>{
        return (
            <img src={bondImg} alt="bond approve" className="t-bond-image" />
        );
    };

    loginForm = () =>{
        const {
            firstnameErrorMessage,
            lastnameErrorMessage,
            passwordErrorMessage
        } = this.state;

        return (
            <form className="form">
                <h1>Введите свои данные, агент</h1>

                <p className="field">
                    <label className="field__label" htmlFor="firstname">
                        <span className="field-label">Имя</span>
                    </label>
                    <input className="field__input field-input t-input-firstname" type="text" name="firstname" value={this.state.inputs.firstname} onChange={this.handleChange} onKeyPress={this.validateForm} />
                    <span className="field__error field-error t-error-firstname">{firstnameErrorMessage}</span>
                </p>

                <p className="field">
                    <label className="field__label" htmlFor="lastname">
                        <span className="field-label">Фамилия</span>
                    </label>
                    <input className="field__input field-input t-input-lastname" type="text" name="lastname" value={this.state.inputs.lastname} onChange={this.handleChange} onKeyPress={this.validateForm} />
                    <span className="field__error field-error t-error-lastname">{lastnameErrorMessage}</span>
                </p>

                <p className="field">
                    <label className="field__label" htmlFor="password">
                        <span className="field-label">Пароль</span>
                    </label>
                    <input className="field__input field-input t-input-password" type="password" name="password" value={this.state.inputs.password} onChange={this.handleChange} onKeyPress={this.validateForm} />
                    <span className="field__error field-error t-error-password">{passwordErrorMessage}</span>
                </p>

                <div className="form__buttons">
                    <input onClick={this.validateForm} type="button" ref={this.submitButton} className="button t-submit" value="Проверить" />
                </div>
            </form>
        );
    };

    render(){
        return(
            <div ref={this.appContainer} className="app-container">
                {this.state.formSubmitted ? this.bond() : this.loginForm()}
            </div>
        );
    }
}

export default Form;