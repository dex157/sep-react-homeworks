import React, { Component } from 'react';
import styles from './Mail.module.css';

export default class Mail extends Component {
    render() {
        const { from, to, body } = this.props,
              cont = from ? <p className = "t-mail-from">
                                "From:"
                                <b>{from}</b>
                            </p> :
                            <p className = "t-mail-to">
                            "To:"
                            <b>{to}</b>
                        </p>
        return(
            <div className = {styles.container}>
                { cont }
                <p className = "t-mail-body">{body}</p>
            </div>
        );
    }
}