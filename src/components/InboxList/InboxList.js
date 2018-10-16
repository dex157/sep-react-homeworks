import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList/MailList';

class InboxList extends Component {
  render() {
    const { data, ...rest } = this.props;
    return <MailList s="t-inbox-list" data={data.inbox} {...rest} />;
  }
}

export default withData(InboxList);
