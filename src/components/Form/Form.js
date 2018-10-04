import React, {Component} from 'react';
import './Form.css';
import Bond from './assets/bond_approve.jpg';

export default class Form extends Component {

    // инициализируем поля пустыми значениями
    // значения ошибок будем хранить в formErrors, первоначально значение ошибки - пустая строка
    constructor (props) {
        super(props);
        this.state = {
            values : {
                firstname: '',
                lastname: '',
                password: '',        
            },
            errors : {
                firstname: '',
                lastname: '',
                password: '',        
            },
            isValid: false
        };    
        this.authData = {
            correct : {
                firstname: 'james',
                lastname: 'bond',
                password: '007'        
            },
            errors : {
                firstname: 'Имя указано неверно',
                lastname: 'Фамилия указана неверно',
                password: 'Пароль указан неверно'        
            }, 
            empty : {
                firstname: 'Нужно указать имя',
                lastname: 'Нужно указать фамилию',
                password: 'Нужно указать пароль'        
            }
        }       
    }

    // обновляем содержимое state при изменении поля Input
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { console.log('input'); });
    }

    // отслеживание изменений поля ввода
    changeInputMessage = event => {
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({ [name]: value });
        
    };
    
    onSubmit(event) {
        event.preventDefault();
               
            if ( this.state.firstname.toLowerCase() !== 'james') {
                this.state.firstname === '' ? this.setState({ firstnameError: 'Нужно указать имя' }) 
                : this.setState({ firstnameError: 'Имя указано неверно' });
            }; 
            if ( this.state.lastname.toLowerCase() !== 'bond') {
                this.state.lastname === '' ? this.setState({ lastnameError: 'Нужно указать фамилию' }) 
                : this.setState({ lastnameError: 'Фамилия указана неверно' });
            }; 

            if ( this.state.password !== '007') {
                this.state.password === '' ? this.setState({ passwordError: 'Нужно указать пароль' }) 
                : this.setState({ passwordError: 'Пароль указан неверно' });
            };           
    }

    renderImage = () => {
        return <img src={Bond} alt="bond approve" className="t-bond-image" />;
    };

    renderForm() {
        console.log(this.state.firstnameError);
          return (
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
                        value={this.state.firstname}
                        onChange={this.changeInputMessage}
                    />
                    <span className="field__error field-error t-error-firstname">
                        {this.state.firstnameError} 
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
                        onChange={this.changeInputMessage}
                    />
                    <span className="field__error field-error t-error-lastname">
                        {this.state.lastnameError} 
                    </span>
                </p>
                <p className="field">
                    <label className="field__label" htmlFor="password">
                        <span className="field-label">Пароль</span>
                    </label>
                    <input
                        className="field__input field-input t-input-password"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeInputMessage}
                    />
                    <span className="field__error field-error t-error-password">
                        {this.state.passwordError} 
                    </span>
                </p>     
                <div className={'form__buttons'}>
                    <button className={'button t-submit'} onClick={(e) => this.onSubmit(e)}>Проверить</button>
                </div>
            </form>
        );
    };

    render() {
        return (
            <div className={'app-container'}>
                {!this.state.isValid ? this.renderForm() : this.renderImage()}
            </div>
        );
    };
} 
