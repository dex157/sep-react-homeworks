import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div className='message'>
        <div className='message__like'>
          <span className="message">{this.props.text}</span>;
        </div>
      </div>
    );
  }
}
