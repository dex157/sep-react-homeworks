import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styles from './UserInfo.module.css';

class UserInfo extends PureComponent {
  render() {
    const { name, bio, avatar_url } = this.props;

    return name !== undefined ? (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={avatar_url} alt="user info" />
        </div>
        <div>
          <p className="t-user-name">{name}</p>
          <p className="t-user-bio">{bio}</p>
        </div>
      </div>
    ) : (
      <p className="t-no-user-info">Нет информации о пользователе</p>
    );
  }
}

export default connect(state => ({ ...state.user.data }))(UserInfo);