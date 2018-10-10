import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({match, data, page}) => {
  console.log(data[page])
  return (
    <div className={`${styles.container} t-${page}-list`}>
      {data[page].map(mailLink => (
        <Link 
          key={mailLink.id}
          className={styles.link}
          to={`${match.url}/${mailLink.id}`}
        >
          {`${mailLink.body.substr(0, 52)}...`}
        </Link>
      ))}
    </div>
  )
}

export default MailList;