import React, { Component } from 'react'; // эту строку надо писать всегда, чтобы babel понимал что мы используем JSX

class Form extends Component {
    state = {
        login: '',
        lastName: '',
        password: ''
    };

    handleOnChange = event => {
        this.setState({ login: event.target.login });
        this.setState({ lastName: event.target.lastName });
        this.setState({ password: event.target.password });
    };

    handleonSubmit = event => {
        ///отправка форм
    };

    render() {
        return (
            <Form>
            <div>
                    <p>{this.state.login}</p>
                    <form class="form">
                        <h1>Введите свои данные, агент</h1>
                        <p class="field">
                            <label class="field__label" for="firstname"><span class="field-label">Имя</span></label>
                            <input class="field__input field-input t-input-firstname" type="text" name="firstname" value="lkl"></input>
                            <span class="field__error field-error t-error-firstname">Имя указано не верно</span>
                        </p>
                        <p class="field">
                            <label class="field__label" for="lastname"><span class="field-label">Фамилия</span></label>
                            <input class="field__input field-input t-input-lastname" type="text" name="lastname" value="lklk"></input>
                            <span class="field__error field-error t-error-lastname">Фамилия указана не верно</span>
                        </p>
                        <p class="field">
                                <label class="field__label" for="password"><span class="field-label">Пароль</span></label>
                            <input class="field__input field-input t-input-password" type="password" name="password" value=""></input>
                                <span class="field__error field-error t-error-password">Нужно указать пароль</span>
                        </p>
                        <div class="form__buttons">
                            <input type="submit" class="button t-submit" value="Проверить"></input>
                        
                        </div>
            </form>
                    <p>{this.state.login}</p>
                    <input login={this.state.login} onChange={this.handleOnChange} />
                    <input lastName={this.state.lastName} onChange={this.handleOnChange} />
                    <input password={this.state.password} onChange={this.handleOnChange} />
                    <button onSubmit={this.handleonSubmit}>Проверить </button>
                    {/* onSubmit={this.props.onSubmit} */}
            </div>
            </Form>
        );
    }
}

export default Form;