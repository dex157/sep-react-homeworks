import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends PureComponent {
  render() {
    const {
      data: { inbox },
      match: { path }
    } = this.props;
    return <MailList className={'t-inbox-list'} mails={inbox} path={path} />;
  }
}

export default withData(InboxList);
