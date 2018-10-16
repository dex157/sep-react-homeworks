import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './MailList.module.css';

class MailList extends Component {
  render() {
    const { data, match, s } = this.props;

    return (
      <div className={classNames(styles.container, s)}>
        {data.map(mail => (
          <Link
            key={mail.id}
            className={styles.link}
            to={match.url + '/' + mail.id}
          >
            {mail.body.slice(0, 52) + '...'}
          </Link>
        ))}
      </div>
    );
  }
}

export default MailList;