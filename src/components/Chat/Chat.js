import React from 'react';
import Message from "../Message/Message";
import './Chat.css';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: [], messageInput: ''};
        this.changeInputMessage = this.changeInputMessage.bind(this);
        this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    }

    changeInputMessage(event) {
        this.setState({messageInput: event.target.value});
    }

    sendMessageOnEnter(event) {
        if (event.key === 'Enter') {
            this.setState({messages: [...this.state.messages, {text: event.target.value}]});
            this.setState({messageInput: ""});
        }
    }

    render() {
        const messageList = this.state.messages.map((message, i) => <Message key={i} text={message.text}/>);

        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messageList}
                    </div>
                </div>
                <input type="text" className="input-message" value={this.state.messageInput}
                       onChange={this.changeInputMessage}
                       onKeyPress={this.sendMessageOnEnter}/>
            </div>
        )

    }
}