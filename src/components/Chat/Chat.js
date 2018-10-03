import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  // fill value
  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  //get message & clear form
  sendMessageOnEnter = event => {
    const { messageInput, messages } = this.state;

    if (event.key === 'Enter' && messageInput !== '') {
      this.setState({
        messages: [
          ...messages,
          {
            text: messageInput
          }
        ],
        messageInput: ''
      });
    }
  };

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messageInput, messages } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div ref="messages" className="messages">
            {messages.map((message, key) => (
              <Message key={key} text={message.text} />
            ))}
            <div
              ref={el => {
                this.messagesEnd = el;
              }}
            />
          </div>
        </div>
        <input
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
