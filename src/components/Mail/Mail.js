import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Mail.module.css';

const Mail = (props) => {
    const {body, from , email, type } = props;
    
    return (
        <div className={styles.container}>
            <p className={`t-mail-${type.toLowerCase()}`}>
                {type}:<b>{email}</b>
            </p>
            <p className="t-mail-body">{body}</p>
            <Link className='MailList_link' to={`/app/${from ? 'inbox': 'outbox'}`}>
                Вернуться к списку
            </Link>
        </div>
    );
}

export default Mail;
