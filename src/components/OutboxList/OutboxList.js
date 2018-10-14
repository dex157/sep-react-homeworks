import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

const OutboxList = ({ data }) => <MailList type="outbox" mails={data.outbox} />;

export default withData(OutboxList);