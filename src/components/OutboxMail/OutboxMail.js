import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends PureComponent {
  render() {
    const {
      data: { outbox },
      match: { path }
    } = this.props;
    return <MailList className={'t-outbox-list'} mails={outbox} path={path} />;
  }
}

export default withData(OutboxList);
