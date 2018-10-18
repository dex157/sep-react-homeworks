import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

export default class MailList extends Component {
    render(){
        const { dir, messages } = this.props;
        return (
            <div className = {`${ styles.container } t-${dir}-list` }>
                {
                    messages.map((mess) => 
                        <Link to = {`/app/${dir}/${mess.id}`} className = { styles.link }>{ `${mess.body.substr(0,50)} ...` }</Link>
                    )
                }
            </div>
        );
    }
}