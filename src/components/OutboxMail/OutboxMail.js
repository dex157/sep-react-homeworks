import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class OutboxMail extends PureComponent {
  render() {
    const {
      match: {
        params
      },
      data
    } = this.props;

    const mail = data.outbox.find(mail => mail.id === params[0]);

    return <Mail {...mail} />;
  }
}

export default withData(OutboxMail);