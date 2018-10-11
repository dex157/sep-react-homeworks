import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

const InboxMail = ({
                     match: {
                       params: { id }
                     },
                     data
                   }) => {
  const mail = data.inbox.find(mail => mail.id === id);

  return <Mail mail={mail} type="From" />;
};

export default withData(InboxMail);
