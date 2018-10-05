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

    // отслеживание изменений поля ввода и запись их в State
    changeInputMessage = event => {
        const { name, value } = event.target;
        const currState = this.state.values;
        let keys = Object.keys(currState);

        for (let key of keys) {
            if (key === name) {
                currState[key] = value;                
            }
        };

        if (keys.indexOf(name) !== -1) {
            this.setState({ 
                values: currState
            });
        }            
    };
    
    onSubmit(event) {
        event.preventDefault();
        const currState = this.state.values;
        const currErrors = this.state.errors;
        
        let keys = Object.keys(currState);               

        for (let key of keys) {
            let input = this.state.values[key].toLowerCase();
            
            if ( input !== this.authData.correct[key]) {
                console.log(currErrors);
                (input === '') ? currErrors[key] = this.authData.empty[key] : currErrors[key] = this.authData.errors[key];                             
            } else {
                currErrors[key] = '';
            }
        };

        this.setState({ 
            errors: currErrors
        });
        
        keys = Object.keys(currErrors);
        let valid = true;

        for (let key of keys) {
            if (currErrors[key] !== '') {
                valid = false;
            }
        }

        if (valid === true) {
            this.setState({ 
                isValid: true
            });
        }

    }

    renderImage = () => {
        return <img src={Bond} alt="bond approve" className="t-bond-image" />;
    };

    renderForm() {
        
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
                        {this.state.errors.firstname} 
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
                        {this.state.errors.lastname} 
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
                        {this.state.errors.password} 
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
