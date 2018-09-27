import React, {Component} from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
    state = {
        messageInput: '',
        messages: [],
    }

    changeInputMessage = event => {
        this.setState({messageInput: event.target.value});
    }

    sendMessageOnEnter = event => {
        if (event.key !== 'Enter') return;
        let {messageInput} = this.state,
            messages = this.state.messages;

            messages.push({text: messageInput});

        this.setState({messageInput: '', messages: messages});
    }

    componentDidUpdate() {
        let messageWrap = document.querySelector('.message-list'),
            messagesHeight = document.querySelector('.messages').offsetHeight;

        messageWrap.scrollTop = messagesHeight;
    }

    render () {

        let {messageInput, messages} = this.state;

        return (
            <div className="chat">
                <div className="message-list">
                    <Message text={messages}/> 
                </div>
                <input className="input-message" type="text" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} value={messageInput}/>
            </div> 
        )
    }
}

export default Chat;