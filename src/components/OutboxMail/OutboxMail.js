import React, { Component } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends Component {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.outbox.find(mail => mail.id === id);

    return <Mail {...mail} email={mail.to} type='To' />;
  }
}

export default withData(InboxMail);
