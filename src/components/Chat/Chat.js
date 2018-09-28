import React, { Component } from 'react'
import Message from '../Message'
import './Chat.css'

class Chat extends Component {
    state = {
        messageInput: '',
        messages: []
    }

    changeInputMessage = event => {
        this.setState({messageInput: event.target.value})
    }

    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            this.setState({messages: [...this.state.messages, {text: this.state.messageInput}], messageInput: ""})
        }
    }

    render() {
        const { messages, messageInput } = this.state

        return(
            <div className={'chat'}>
                <div className={'message-list'}>
                    <div className={'messages'}>
                        {
                            messages.map((message, i) => <Message key={i} text={message.text} />)
                        }
                    </div>
                </div>         

                <input 
                    className={'input-message'} 
                    value={messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter} 
                />
            </div>
        )
    }
}

export default Chat