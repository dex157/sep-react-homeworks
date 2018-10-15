import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends Component {
    render(){
        const { 
            data: {outbox} 
        } = this.props;

        return (
            <MailList messages = { outbox } dir = "outbox" />
        );
    }
}

export default withData(InboxList);