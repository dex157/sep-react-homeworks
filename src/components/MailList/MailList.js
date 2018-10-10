import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';
import cls from 'classnames';

class MailList extends Component {
  render() {
    const { type } = this.props;

    return (
      <div className={cls(styles.container, ` t-${type}-list`)}>
        {this.renderMails()}
      </div>
    );
  }

  renderMails() {
    const { type, mails } = this.props;

    return mails.map(mail => (
      <Link
        className={styles.link}
        key={mail.id}
        to={`/app/${type}/${mail.id}`}
      >
        {`${mail.body.substr(0, 52)}...`}
      </Link>
    ));
  }
}

export default MailList;
