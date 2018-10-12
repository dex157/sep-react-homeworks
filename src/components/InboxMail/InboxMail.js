import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;

    const idTest = this.props.match.params[0];
    const mail = data.inbox.find(mail => mail.id === idTest);

    return <Mail {...mail} />;
  }
}

export default withData(InboxMail);
