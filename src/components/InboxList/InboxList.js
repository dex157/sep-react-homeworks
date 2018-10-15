import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class InboxList extends Component {
  render() {
    const { data } = this.props;
    return (
      <MailList className="t-inbox-list" emails={data.inbox} type="inbox" />
    );
  }
}

export default withData(InboxList);
