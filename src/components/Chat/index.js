import React from 'react'
import Message from '../Message'

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
                messages: [...messages, { text: messageInput, id: messages.length }],
                messageInput: ''
            });
        }
    }

    render() {
        const { messages, messageInput } = this.state;

        console.log(this.state);
        return (
            <div className='chat'>
                <div className='message-list' >
                    {messages.map((el, id) => (
                        <div key={id} className='messages'>
                            <Message text={el.text} />
                        </div>
                    ))}
                </div>
                <input className='input-message' value={messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter} />
            </div>
        )
    }
}

export default Chat;