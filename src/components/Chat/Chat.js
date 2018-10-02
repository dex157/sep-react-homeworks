import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };
    changeInputMessage = e => {
        this.setState({ messageInput: e.target.value });
    };
    sendMessageOnEnter = e => {
        const { messages, messageInput } = this.state;
        if (e.key === 'Enter') {
            this.setState({
                messages: [...messages, { text: messageInput }],
                messageInput: ''
            });
        }
    };

    render() {
        const { messages, messageInput } = this.state;
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messages.map((elem, i) => {
                            return <Message text={elem.text} key={i} />;
                        })}
                    </div>
                </div>
                <input
                    className="input-message"
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                    value={messageInput}
                />
            </div>
        );
    }
}

export default Chat;
