import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends Component {

    state = {
        messages: [],
        messageInput: '',
    }

    render() {
        return (
            <div className = "chat">
                <div className = "message-list">
                    <div className = "messages">
                        {this.state.messages.map( (message, i) => 
                            <Message key = {i} text = {message.text} />
                            )}
                    </div>
                </div>
                <input className="input-message" onChange = {this.changeInputMessage} onKeyPress = {this.sendMessageOnEnter} value = {this.state.messageInput}></input>
            </div>
        );
    }

    changeInputMessage = event => {
        this.setState({
            messageInput: event.target.value
        });
    }

    sendMessageOnEnter = event => {
         if (event.key === 'Enter') {
            this.setState(
                ({messages, messageInput}) => (
                    {
                        messages: [...messages, {text: messageInput}],
                        messageInput: ''
                    }
                )
            );
        }
    }
}