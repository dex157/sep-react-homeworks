import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {
  render() {
    const { body, from, to } = this.props;

    return (
      <div className={styles.container}>
        {to ? (
          <h3 className="t-mail-to">
            To:
            {to}
          </h3>
        ) : (
          <h3 className="t-mail-from">
            From:
            {from}
          </h3>
        )}
        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}
export default Mail;
