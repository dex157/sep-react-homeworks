import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends PureComponent {
  render() {
    const { data } = this.props;
    const mailList = data.inbox;

    return <MailList list={mailList} target="inbox" />;
  }
}

export default withData(InboxList);
