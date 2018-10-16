import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList/MailList';

class OutboxList extends Component {
  render() {
    const { data, ...rest } = this.props;
    return <MailList s="t-outbox-list" data={data.outbox} {...rest} />;
  }
}

export default withData(OutboxList);
