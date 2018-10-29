import React from 'react';
import styles from './Mail.module.css';

const Mail = ({ from, to, body }) => (
    <div className={styles.container}>
        {to && (
            <p className="t-mail-to">
                To: <b>{to}</b>
            </p>
        )}
        {from && (
            <p className="t-mail-from">
                From: <b>{from}</b>
            </p>
        )}
        <p className={'t-mail-body'}>{body}</p>
    </div>
);

export default Mail;