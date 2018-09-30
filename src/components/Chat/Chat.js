import  React, { Component } from 'react';
import Message from '../Message/Message'
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  }

  changeInputMessage = (e) => {
    this.setState({ messageInput: e.target.value })
  }

  sendMessageOnEnter = (e) => {
    if (e.key === 'Enter') {
  
      this.setState( ({ messages, messageInput }) => ({
        messages: [...messages, {text: messageInput}],
        messageInput: ''
      }));

    }
  }

  render() {
    const { messages, messageInput } = this.state;
    
    return (
      <div className='chat'>
        <div className='message-list'>
          <div className='messages'>
            {messages.map((item, idx) => <Message key={idx} text={item.text} />)}
          </div>
        </div>
        <input className='input-message' onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} value={messageInput}/>
      </div>
    )
  }

  /* componentDidUpdate() {
    const messageList = document.querySelector('.message-list');

    messageList.scrollTop = messageList.scrollHeight;
    console.log(messageList.scrollTop);
  } */
}

export default Chat