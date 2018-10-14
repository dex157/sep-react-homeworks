import React from 'react';
import style from './Mail.module.css';

const Mail = ({ mail, type }) => (
  <div className={style.container}>
    <p className={`t-mail-${type.toLowerCase()}`}>
      {type}:<b>{mail[type.toLowerCase()]}</b>
    </p>
    <p className="t-mail-body">{mail.body}</p>
  </div>
);

export default Mail;