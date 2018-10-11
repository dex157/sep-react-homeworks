import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

const InboxList = ({ data }) => <MailList type="inbox" mails={data.inbox} />;

export default withData(InboxList);