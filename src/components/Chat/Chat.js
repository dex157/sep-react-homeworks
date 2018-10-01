import React, {Component} from 'react';
import './Chat.css';
import Message from 'components/Message';

export default class Chat extends Component {
    // инициализируем state
    state = {
        messages: [],
        messageInput: ''
    };
  
    // отслеживание изменений поля ввода
    changeInputMessage = event => {
        this.setState({
            messageInput: event.target.value
        });
    };

    // добавление сообщения при нажатии Enter
    sendMessageOnEnter = event => {
      const { messages, messageInput } = this.state;
      
        if (event.key === 'Enter') {

            // добавляем запись в список messages, в конец списка
            this.setState({
              messages: [...messages, { text: messageInput }],
              messageInput: ''
            });

        } else {
            return false;
        }
    };
    
    // обеспечиваем видимость элементов в окне формы
    componentDidUpdate() {
      this.scrollVisible();
    }  

    scrollVisible() {
      if (this.elem) {
        this.elem.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }
    }

    render() {
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages"
                      ref={elem => {
                        this.elem = elem;
                      }}
                    >
                        {this.state.messages.map((message, index) => {
                            return <Message key={index} text={message.text}/>;
                        })}
                    </div>
                </div>

                <input
                    className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>

        );
    }
}