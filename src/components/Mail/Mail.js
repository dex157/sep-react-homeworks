import React, { Component } from 'react';

import styles from './Mail.module.css';

class Mail extends Component {
  render() {
    const { from, to, body } = this.props;
    return (
      <div className={styles.container}>
        {from !== undefined ? (
          <p className="t-mail-from">
            From: <b>{from}</b>
          </p>
        ) : (
          <p className="t-mail-to">
            To: <b>{to}</b>
          </p>
        )}
        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}

export default Mail;
