import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

const InboxList = props => {

  return (
    <MailList {...props} page='inbox' />
  )
}

export default withData(InboxList);