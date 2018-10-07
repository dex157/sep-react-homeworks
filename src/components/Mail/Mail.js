import React from 'react';
import styles from './Mail.module.css';

export default props => {
  const {
    mail: { body },
    mail,
    subject
  } = props;
  const header = mail.from ? mail.from : mail.to;
  const testName = mail.from ? 't-mail-from' : 't-mail-to';

  return (
    <div className={styles.container}>
      <p className={testName}>
        {subject}:<b>{header}</b>
      </p>
      <p className="t-mail-body">{body}</p>
    </div>
  );
};
