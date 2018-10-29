import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MailList.module.css';

class MailList extends Component {
  renderMails() {
    const { type, mails } = this.props;

    return mails.map(item => (
      <NavLink
        className={styles.link}
        key={item.id}
        to={`/app/${type}/${item.id}`}
        children={`${item.body.substr(0, 52)}...`}
      />
    ));
  }

  render() {
    const { type } = this.props;

    return (
      <div className={styles.container + ` t-${type}-list`}>
        {this.renderMails()}
      </div>
    );
  }
}

export default MailList;