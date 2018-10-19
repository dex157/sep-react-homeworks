import React, { Component } from 'react';
import style from './Mail.module.css';

class Mail extends Component {
  render() {
    const { body, from, to } = this.props;
    return (
      <div className={style.container}>
        {from ? (
          <p className="t-mail-from">From: {from}</p>
        ) : (
          <p className="t-mail-to">To: {to}</p>
        )}

        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}

export default Mail;
