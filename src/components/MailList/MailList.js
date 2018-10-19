import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './MailList.module.css';
import cls from 'classnames';

class MailList extends Component {
  renderEmails = () => {
    const { type, emails } = this.props;
    return emails.map(email => (
      <Link
        to={`/app/${type}/${email.id}`}
        className={style.link}
        key={email.id}
      >
        {`${email.body.substr(0, 52)}...`}
      </Link>
    ));
  };
  render() {
    const { type } = this.props;
    return (
      <div className={cls(style.container, `t-${type}-list`)}>
        {this.renderEmails()}
      </div>
    );
  }
}

export default MailList;
