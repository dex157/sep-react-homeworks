import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends Component {
    render() {
        const { data } = this.props;
        const mailList = data.inbox;
        
        return ( 
            <MailList mails={mailList} type="inbox"/>
        );
    }
}

export default withData(InboxList);