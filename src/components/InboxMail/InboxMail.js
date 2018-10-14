import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params
      },
      data
    } = this.props;

    const mail = data.inbox.find(mail => mail.id === params[0]);

    return <Mail {...mail} />;
  }
}

export default withData(InboxMail);
