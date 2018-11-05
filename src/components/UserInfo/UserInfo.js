import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getData, getIsLoading } from '../../modules/User';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { data: user, isLoading } = this.props;

    if (isLoading)
      return (
        <p className="t-no-user-info">Загрузка информации о пользователе</p>
      );
    if (!user)
      return <p className="t-no-user-info">Нет информации о пользователе</p>;

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={user.avatar_url} alt={user.name} />
        </div>
        <div>
          <p className="t-user-name">{user.name}</p>
          <p className="t-user-bio">{user.bio}</p>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(UserInfo);