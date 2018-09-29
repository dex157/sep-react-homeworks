import React, { Component } from 'react';
import './Message.css';

class Message extends Component{
    render(){
        const { messageInput } = this.props;
        return(
            <span className="message">
                {messageInput}
            </span>
        );
    }
}

export default Message;