import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };

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

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        if (this.messages) {
            this.messages.scrollIntoView({ behavior: 'auto' });
        }
    };

    render() {
        return (
            <div className = "chat">
                <div className = "message-list">
                    <div className = "messages">
                        {this.state.messages.map((message, key) => {
                            return <Message key={key} text={message.text}/>;
                        })}
                        <div
                            ref={e => {
                                this.messages = e;
                            }}
                        />
                    </div>
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