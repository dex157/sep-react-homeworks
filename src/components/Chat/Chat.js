import React, {Component} from 'react';
import Message from 'components/Message'
import './Chat.css';

export default class Chat extends Component {

    state = {
        messages: [],
        messageInput: ''
    };

    changeInputMessage = (event) => {
        let value = event.target.value;
        this.setState({messageInput: value});
    }

    sendMessageOnEnter = (event) => {
        const {messages, messageInput} = this.state;

        if (event.key === 'Enter') {
            this.setState({
                messageInput: '', 
                messages: [...messages, {text: messageInput}]
            })
        }
    }

    render() {
        const {messages} = this.state;
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messages.map(elem => {
                            return <Message key={elem.text} text={elem.text}/>
                        })}
                    </div>
                </div>
                <input type="text" 
                    value={this.state.messageInput} 
                    onKeyPress={this.sendMessageOnEnter} 
                    onChange={this.changeInputMessage} 
                    className="input-message"
                />
            </div>
        )
    }
}