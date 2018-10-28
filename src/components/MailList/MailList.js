import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';


const MailList = ({ mails, type }) => (
    <div className={`${styles.container} t-${type}-list`}>
        {mails.map(el => (
            <Link className={styles.link} key={el.id} to={`/app/${type}/${el.id}`}>
                {`${el.body.slice(0, 50)}...`}
            </Link>
        ))}
    </div>
);
export default MailList;