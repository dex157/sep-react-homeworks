import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends Component {
    render() {
        const { data } = this.props;
        const mailList = data.outbox;
        
        return ( 
            <MailList mails={mailList} type="outbox" />
        );
    }
}

export default withData(OutboxList);