import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './MailList.module.css';

class MailList extends Component {
    render() {
        const {type} = this.props;

        return (
            <div className = {style.container + ` t-${type}-list`}>
                {this.renderMails()}
            </div>
        );
    }

    renderMails() {
        const {type, mails} = this.props;

        return mails.map(mail => (
            <Link 
                className = {style.link} 
                key = {mail.id} 
                to = {`/app/${type}/${mail.id}`}>
                {`${mail.body.substr(0, 52)}...`}
            </Link>
        ));
    }
}

export default MailList;