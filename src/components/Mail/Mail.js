import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {
  render() {
    const { body } = this.props;
    const props = this.props;
    const type = props['from'] ? 'From' : 'To';
    const email = props['from'] ? props['from'] : props['to'];

    return (
      <div className={styles.container}>
        <p className={`t-mail-${type.toLowerCase()}`}>
          {type + ': '}<b>{email}</b>
        </p>
        <p className="t-mail-body">
          {body}
        </p>
      </div>
    );
  }
}

export default Mail;