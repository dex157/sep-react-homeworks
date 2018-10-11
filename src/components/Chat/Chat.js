import React, { Component } from 'react';
import Message from './../Message/Message';
import './Chat.css';

class Chat extends Component {
    state = {
        messageInput: '',
        messages: []
    }
    changeInputMessage = e => {
        this.setState({
            messageInput: e.target.value
        });
    };
    
    sendMessageOnEnter = e => {
        if (e.key === 'Enter' && this.state.messageInput) {
             this.setState(state => ({
                messages: [...state.messages, { text: state.messageInput }],
                messageInput: ''
            }));
        }
    };

    render() {
        let {messages} = this.state;
        return (
            <div className="chat">
                <div className = "messages">
                {messages.map((message ,key) => (
                         <Message key={key} text={message.text}  /> 
                    )
                )}
                </div>
                <input 
                    className = "input-message" 
                    value={this.state.messageInput} 
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        );
    }
} 
export default Chat;