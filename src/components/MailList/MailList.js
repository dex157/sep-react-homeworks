import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

class MailList extends Component {
  getLinks(type) {
    const { mails } = this.props;

    return mails.map(({ id, body, from }) => (
      <Link key={id} className={styles.link} to={`/app/${type}/${id}`}>
        {`${body.substr(0, 52)}...`}
      </Link>
    ));
  }

  render() {
    const { type } = this.props;

    return (
      <div className={styles.container + ` t-${type}-list`}>
        {this.getLinks(type)}
      </div>
    );
  }
}
export default MailList;
