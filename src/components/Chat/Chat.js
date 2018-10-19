import React, {Component} from 'react';
import Message from '../Message/Message'
import './Chat.css'

class App extends Component {
    state = {
        messageInput: '',
        messages: []
    };

    sendMessageOnEnter = (event) => {
        const { messages, messageInput } = this.state;

        if(event.key === 'Enter' && messageInput) {
            this.setState({
                messages: [...messages, { text: messageInput }],
                messageInput: ''
            });
        }
    };

    changeInputMessage = (event) => {
        this.setState({ messageInput: event.target.value });
    };

    render() {
        const { messageInput, messages } = this.state

        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messages.map((message, index) => (
                            <Message key={index} text={message.text} />
                        ))}
                    </div>
                </div>
                <input type="text" className='input-message' onKeyPress={this.sendMessageOnEnter} onChange={this.changeInputMessage} value= {messageInput} />
            </div>
        )
    }
}

export default App;