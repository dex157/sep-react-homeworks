import React, {Component} from 'react';
import './Form.css';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            soname: '',
            password: '',
            isCorrect: false
        };
        this.changeName = this.changeName.bind(this);
        this.changeSoname = this.changeSoname.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.nameError = React.createRef();
        this.sonameError = React.createRef();
        this.passwordError = React.createRef();
    }

    changeName = e => {
        this.cleanFields();
        this.setState({name: e.target.value});
    };
    changeSoname = e => {
        this.cleanFields();
        this.setState({soname: e.target.value});
    };
    changePassword = e => {
        this.cleanFields();
        this.setState({password: e.target.value});
    };

    cleanFields() {
        this.nameError.current.innerText = "";
        this.passwordError.current.innerText = "";
        this.sonameError.current.innerText = ""
    }

    sendMessage = e => {
        e.preventDefault();
        var steps = 0;
        if (this.state.name.length === 0) {
            console.log(this.nameError);
            this.nameError.current.innerText = "Нужно указать имя"
        } else if (this.state.name === "james") {
            this.nameError.current.innerText = "";
            steps++
        } else {
            this.nameError.current.innerText = "Имя указано не верно"
        }

        if (this.state.soname.length === 0) {
            this.sonameError.current.innerText = "Нужно указать фамилию"
        } else if (this.state.soname === "bond") {
            this.sonameError.current.innerText = "";
            steps++
        } else {
            this.sonameError.current.innerText = "Фамилия указана не верно"
        }

        if (this.state.password.length === 0) {
            this.passwordError.current.innerText = "Нужно указать пароль"
        } else if (this.state.password === "007") {
            this.passwordError.current.innerText = "";
            steps++
        } else {
            this.passwordError.current.innerText = "Пароль указан не верноо"
        }
        if (steps === 3) {
            this.setState({isCorrect: true})
        } else {

        }
    };


    render() {
        return (
            <form className="app-container" onSubmit={this.sendMessage}>
                <h1>Нужно указать имя</h1>
                <p className="field">
                    <label className="field-label">Имя</label>
                    <input
                        type="text"
                        className="field__input field-input t-input-firstname"
                        onChange={this.changeName}
                        value={this.state.name}
                    />
                    <span className="field__error field-error t-error-firstname" ref={this.nameError}/>
                </p>
                <p className="field">
                    <label className="field-label">Фамилия</label>
                    <input
                        type="text"
                        className="field__input field-input t-input-lastname"
                        onChange={this.changeSoname}
                        value={this.state.soname}
                    />
                    <span className="field__error field-error t-error-lastname" ref={this.sonameError}/>
                </p>
                <p className="field">
                    <label className="field-label">Пароль</label>
                    <input
                        type="text"
                        className="field__input field-input t-input-password"
                        onChange={this.changePassword}
                        value={this.state.password}
                    />
                    <span className="field__error field-error t-error-password" ref={this.passwordError}/>
                </p>
                <input
                    type="submit"
                    className="button t-submit"
                    onClick={this.sendMessage}
                    value="Проверить"
                />
                {this.state.isCorrect ?
                    <img ref={this.pic} src="/bond_approve.9943a33d.jpg" alt="bond approve"
                         className="t-bond-image"/> :
                    <div></div>
                }
            </form>
        );
    }
}