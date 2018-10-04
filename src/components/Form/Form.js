import React, { Component } from 'react'; // эту строку надо писать всегда, чтобы babel понимал что мы используем JSX

export default () => <p>Homework app</p>

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