import React, { Component } from 'react';
import './Message.css';

class Message extends Component{
    render(){
        const { text } = this.props;

        return(
            <span className="message">
                { text }
            </span>
        );
    }
}

export default Message;