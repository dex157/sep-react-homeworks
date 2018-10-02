import React, { Component } from 'react';
import Message from './../Message/Message';
import './Chat.css';

class Chat extends Component {
    state = {
        messageInput: '',
        messages: []
    }
    sendMessageOnEnter = (event) => {
        let {messageInput} = this.state;
        if (event.key === 'Enter'){
            this.setState({
                messages: [...this.state.messages, {text: messageInput}]}, () => {
                // console.log(this.state);
            });
            event.target.value = '';
            this.setState({messageInput: ''});

        }
        
    };
    changeInputMessage = (event) => {
        this.setState({messageInput: event.target.value})
    };

    render() {
        let {messages, messageInput} = this.state;
        return (
            <div className="chat">
                <div className = "messages">
                    {messages.map((message ,key) => {
                        return <Message key={key} text={message.text}  /> 
                    })}
                </div>
                <input className="input-message"  value={messageInput} type="text" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
            </div>
        );
    }
} 
export default Chat;