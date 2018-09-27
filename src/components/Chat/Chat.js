import React, { Component} from 'react';
import './Chat.css'
import Message from '../Message'

class Chat extends Component {
    state = {
        messages: [],
        messageInput: '',
    }

    changeInputMessage = event => {
        this.setState( { messageInput: event.target.value } )
    }

    sendMessageOnEnter = event => {
        const { messages, messageInput } = this.state

        if ((event.key === 'Enter') && (messageInput)) {
            messages.push( { text: messageInput } )

            this.setState( { messages: messages } )
            this.setState( { messageInput: ''})
        }
    }

    render () {
        const { messages } = this.state
        return (
            <div className='chat'>
                <div className="message-list">
                    <div className="messages" ref={(el) => { this.messageList = el }}>
                        {messages.map((message, countId) => {
                            return <Message key={countId} text={message.text} />
                        })}
                    </div>
                </div>
                <input onChange={ this.changeInputMessage } onKeyPress={ this.sendMessageOnEnter } className='input-message' value={this.state.messageInput}></input>
            </div>
        )
    }

    scrollToBottom = () => {
        this.messageList.scrollIntoView({block: "end", behavior: "smooth"})
    }
    
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }
}

export default Chat;