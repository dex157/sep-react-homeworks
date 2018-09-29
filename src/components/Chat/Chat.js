import React, { Component }  from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends Component{
    state = {
        messageList : [],
        messageInput: ''
    };
    onChange = (event) => {
        this.setState({
            messageInput: event.target.value
        });
    };

    handleKeyPress = (event) => {
        const { messageList, messageInput } = this.state;
        if(event.key === 'Enter'){
            this.setState({
                messageList: [<Message messageInput={messageInput}/>, ...messageList],
                messageInput: ''
            });
        }
    };

    render(){
        const { messageList, messageInput } = this.state;
        return(
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messageList}
                    </div>
                </div>
                <input className="input-message" value={messageInput} onChange={this.onChange} onKeyPress={this.handleKeyPress}/>
            </div>
        );
    }
}

export default Chat;