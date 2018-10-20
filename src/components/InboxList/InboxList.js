import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends Component {
    render(){
        const { 
            data: {inbox} 
        } = this.props;

        return (
            <MailList messages = { inbox } dir = "inbox" />
        );
    }
}

export default withData(InboxList);