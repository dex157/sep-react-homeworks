import React, { Component } from 'react';
import style from './Mail.module.css';

class Mail extends Component {
    render() {
        const props = this.props;
        const {body} = props;
        let type = props['from'] ? 'From' : 'To';

        return (
            <div className = {style.container}>
                <p className = {`t-mail-${type.toLowerCase()}`}/>
                <p className = 't-mail-body'>{body}</p>
            </div>
        );
    }
}

export default Mail;
