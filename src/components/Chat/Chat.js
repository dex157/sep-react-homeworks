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
        //generates unique id for key-prop
        let id = function () {
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters
            // after the decimal.
            return '_' + Math.random().toString(36).substr(2, 9);
        };

        if(event.key === 'Enter'){
            this.setState({
                messageList: [<Message key={id()} messageInput={messageInput}/>, ...messageList],
                messageInput: '' // to clear value of input-field
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