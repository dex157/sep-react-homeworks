import React from 'react';
import Message from '../Message';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageInput: '',
            messages: [],
        }
    }

    changeInputMessage = (e) => {
        this.setState({
            messageInput: e.target.value,
        })
    }

    sendMessageOnEnter = (e) => {
        if(e.key === 'Enter') {
            // this.state.messages.push({text: this.state.messageInput})

            this.setState({
                messageInput: '',
                messages: [...this.state.messages, { text: this.state.messageInput }],
            })
        }
    }

    render() {

        return (
            <div className="chat">
                <div className="message-list">
                    {this.state.messages.map((message, i) => 
                        <Message text={message.text} key={i} />
                    )}
                </div>
                <input  type="text" 
                    className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                    />
            </div>
        )
    }
}

export default Chat