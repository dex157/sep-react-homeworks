import React, {Component} from 'react';
import './Form.css';
import Bond from './assets/bond_approve.jpg';

export default class Form extends Component {

    // инициализируем поля пустыми значениями
    // значения ошибок будем хранить в formErrors, первоначально значение ошибки - пустая строка
    constructor (props) {
        super(props);
        this.state = {
            values: {
                firstname: 'Slav',
                lastname: '',
                password: '',
            },    
            errors: {
                  firstname: '',
                  lastname: '',
                  password: ''
            },
            isSubmitted: false
        };        
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
        this.setState({
            firstname: event.target.value
        });
        
    };
    
    onSubmit = event => {
        const { firstname, value } = event.target;
        this.setState({ [firstname]: value })
        console.log(this.state.firstname);
        
            if (event.key === 'Enter' && this.state.firstname !== 'James') {
                console.log('AAAAAAAAAAAAA');
                
                this.setState({
                    firstnameError: 'Имя указано не верно'
                });
            } else {
                this.renderImage();
            };   
    }
        
    // добавление сообщения при нажатии Enter
    sendMessageOnEnter = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
      
        if (event.key === 'Enter' && this.state.firstname !== 'James') {
            console.log('No Name');
            
            this.setState({
                firstnameError: 'Имя указано не верно'
            });
        } else {
            this.setState({
                firstnameError: this.state.firstname
            });
        }
    };

    renderImage = () => {
        return <img src={Bond} alt="bond approve" className="t-bond-image" />;
    };

    renderForm() {
        console.log(this.state.firstnameError);
          return (
            <form className="form" onSubmit={this.onSubmit}>
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
                        onKeyPress={this.handleUserInput}
                    />
                    <span className="field__error field-error t-error-firstname">
                        {this.state.firstname} 
                    </span>
                </p>    
                <div className={'form__buttons'}>
                    <button className={'button t-submit'} onClick={this.handleUserInput}>Проверить</button>
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
