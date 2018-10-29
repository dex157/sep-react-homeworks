import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {
  render() {
    const { body } = this.props;
    const type = this.props['from'] ? 'From' : 'To';
    const email = this.props['from'] ? this.props['from'] : this.props['to'];

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