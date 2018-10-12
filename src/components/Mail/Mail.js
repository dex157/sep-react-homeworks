import React, { PureComponent } from 'react';
import css from './Mail.module.css';

class Mail extends PureComponent {
    render() {
        const { from, body, to } = this.props;
        const fromTo = from ? { name: 'From', mail: from } : { name: 'To', mail: to };

        return (
            <div className={css.container}>
                <p className={`t-mail-${fromTo.name.toLowerCase()}`}>
                    {fromTo.name} <b>{fromTo.mail}</b>
                </p>
                <p className="t-mail-body">{body}</p>
            </div>
        );
    }
}

export default Mail;
