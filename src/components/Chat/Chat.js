import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  constructor(props) {
    super(props);
    // создаем ссылку для хранения элемента со списком сообщений
    this.lstDiv = React.createRef();
  }


  changeInputMessage = (e) => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = (e) => {
    if (e.key === 'Enter' && this.state.messageInput) {
        this.setState((state) => ({
            messages: [...state.messages, { text: state.messageInput }],
            messageInput: ''
        }));
    }
  };

  componentDidUpdate() {
    // прокручиваем список сообщений так, чтобы последнее сообщение оказалось внизу
    //this.lstDiv.current.scrollIntoView(false);
  }

  render() {
    return (
      // ассоциируем созданную в конструкторе ссылку с элементом - списком сообщений
      <div className="chat">
        <div className="message-list">
          <div className="messages" ref={this.lstDiv}>
            {this.state.messages.map((message, i) => (
              <Message key={i} text={message.text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;