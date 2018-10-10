import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({ type, mails }) => (
  <div className={styles.container + ` t-${type}-list`}>
    {mails.map(mail => (
      <Link
        key={mail.id}
        className={styles.link}
        to={`/app/${type}/${mail.id}`}
      >
        {`${mail.body.substr(0, 52)}...`}
      </Link>
    ))}
  </div>
);

export default MailList;