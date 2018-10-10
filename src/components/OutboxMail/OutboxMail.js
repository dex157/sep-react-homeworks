import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

const OutboxMail = ({
                      match: {
                        params: { id }
                      },
                      data
                    }) => {
  const mail = data.outbox.find(mail => mail.id === id);

  return <Mail mail={mail} type="To" />;
};

export default withData(OutboxMail);