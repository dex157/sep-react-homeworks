import React, { Component } from 'react'; // эту строку надо писать всегда, чтобы babel понимал что мы используем JSX

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // componentDidCatch(error, info) {
    //     // Отображение резервного UI
    //     this.setState({ hasError: true });
    //     // Вы можете прологировать ошибку с помощью сервиса отчета об ошибках
    //     // logErrorToMyService(error, info);
    // }

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
        if (this.login != "James") {
            throw new Error('<span>Имя указано не верно</span>');
            throw new Error('<span>Фамилия указана не верно</span>');
            throw new Error('<span>Нужно указать пароль</span>');
        }
    };

    render() {
        if (this.state.hasError) {
            // Вы можете отрисовать любой резервный UI
            return <span>Имя указано не верно</span>;
            return <span>Фамилия указана не верно</span>;
            return <span>Нужно указать пароль</span>;
        }
        // return this.props.children;

        return (
            <Form>
            <div>
                <p>{this.state.login}</p>
                <form class="form">
                    <h1>Введите свои данные, агент</h1>
                    <p class="field">
                        <label class="field__label" for="firstname"><span class="field-label">Имя</span></label>
                        <input onChange={this.handleOnChange} class="field__input field-input t-input-firstname" type="text" name="firstname" value="lkl"></input>
                            <span class="field__error field-error t-error-firstname">this.state.hasError.login</span>
                    </p>
                        <p class="field">
                            <label class="field__label" for="lastname"><span class="field-label">Фамилия</span></label>
                            <input onChange={this.handleOnChange} class="field__input field-input t-input-lastname" type="text" name="lastname" value="lklk"></input>
                            <span class="field__error field-error t-error-lastname">this.state.hasError.lastName</span>
                        </p>
                        <p class="field">
                            <label class="field__label" for="password"><span class="field-label">Пароль</span></label>
                            <input onChange={this.handleOnChange}class="field__input field-input t-input-password" type="password" name="password" value=""></input>
                            <span class="field__error field-error t-error-password">this.state.hasError.password</span>
                        </p>
                        <div class="form__buttons">
                            <input type="submit" class="button t-submit" value="Проверить"></input>
                        
                        </div>
            </form>

                    <input login={this.state.login}  />
                    <input lastName={this.state.lastName}  />
                    <input password={this.state.password} onChange={this.handleOnChange} />
                    <button onSubmit={this.handleonSubmit}>Проверить </button>
                    {/* onSubmit={this.props.onSubmit} */}
            </div>
            </Form>
        );
    }
}

export default Form;