import React, { Component } from 'react'; // эту строку надо писать всегда, чтобы babel понимал что мы используем JSX
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
    state = {
        messages: [],
        messageInput: '',
    };

    changeInputMessage = (e) => {
        this.setState({
            messageInput: e.target.value,
        });
    };

    sendMessageOnEnter = (e) => {
        const { messageInput, messages } = this.state;
        if (e.key === 'Enter') {
            this.setState({
                messageInput: '',
                messages: [...messages, { text: messageInput }],
            });
        }
        
    };

    render() {
        const { messageInput, messages } = this.state;
        // this.setState({ value: this.state.messageInput });
        // const { children } = this.props;
        console.log(this.state)

        return (

            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        
                        {messages.map((el, key) => (
                            <Message key={key} text={el.text}  />
                            // <Message key={key} text={el.text} customProp={'я кастомное свойство'} />
                        ))}
                    </div>
                </div>
                {/* <Message>
                    {this.state.messages.map(el => (
                        <p>{state.messages[el]}</p>
                    ))}
                </Message> */}
                <input
                    className="input-message" type="text"
                    value={messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
                
            </div>
            
            
        );
    }
}

export default Chat;