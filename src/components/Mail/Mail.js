import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {
    render() {
        const props = this.props;
        const { body } = props;

        let type = null;
        let email = null;
        if (typeof props['from'] !== "undefined") {
            type = 'From';
            email = props['from'];
        } else {
            type = 'To';
            email = props['to'];
        }

        return (
            <div className={styles.container}>
                <p className={`t-mail-${type.toLowerCase()}`}>
                    {type + ': '}
                    <b>
                        {email}
                    </b>
                </p>
                <p className='t-mail-body'>
                    {body}
                </p>
            </div>
        );
    }
}

export default Mail;