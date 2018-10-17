import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const OutboxList = ({ data }) => ( 
    <MailList mails={data.outbox} type="outbox" />
)

export default withData(OutboxList);
