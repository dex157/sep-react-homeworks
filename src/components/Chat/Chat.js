import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
    state = {
        messages: [],
        messageInput: ''
    }

    changeInputMessage = (event) => {
        this.setState({ messageInput: event.target.value });
    }

    sendMessageOnEnter = (event) => {
        const { messages, messageInput } = this.state;

        if (event.key === 'Enter') {
            this.setState({
                messages: [...messages, { text: messageInput }],
                messageInput: ''
            });
        }
    }

    render() {
        const { messages, messageInput } = this.state;

        return (
            <div className='chat'>
                <div className='message-list' >
                    <div className='messages'>
                        {messages.map((el, key) => (
                            <Message key={key} text={el.text} />
                        ))}
                    </div>
                </div>
                <input className='input-message' value={messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter} />
            </div>
        );
    }
}

export default Chat;