import React from 'react';
import styles from './Mail.module.css';

const Mail = ({mail, typeMail}) => {
  return (
    <div className={styles.container}>
      <p className={`t-mail-${typeMail.toLowerCase()}`}>
        {`${typeMail}: `}
        <b>{mail[typeMail.toLowerCase()]}</b>
      </p>
      <p className="t-mail-body">
        {mail.body}
      </p>
    </div>
  )
}

export default Mail;