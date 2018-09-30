import React, { Component }  from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends Component{
    state = {
        messages : [],
        messageInput: ''
    };

    changeInputMessage = (e)  => {
            this.setState({
                messageInput: e.target.value
            });
    };

    sendMessageOnEnter = (e) => {
        const { messages, messageInput } = this.state;

        if(e.key === 'Enter'){
            this.setState({
                // messages: [<Message key={id()} text={messageInput}/>, ...messages],
                messages: [{"text": messageInput}, ...messages],
                messageInput: '' // to clear value of input-field
            });
        }
    };

    render(){
        const { messages, messageInput } = this.state;
        //generates unique id for key-prop
        let id = function () {
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters
            // after the decimal.
            return '_' + Math.random().toString(36).substr(2, 9);
        };
        return(
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messages.map((message) =>
                            <Message key={id} text={message.text} />
                        )}
                    </div>
                </div>
                <input className="input-message" value={messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
            </div>
        );
    }
}

export default Chat;