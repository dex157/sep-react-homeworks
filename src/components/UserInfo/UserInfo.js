import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getIsLoading, getUser } from '../../modules/User';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  renderUserInfo = () => {
    const { user } = this.props;
    if (user && user.id) {
      return (
        <div className={styles.root}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={user.avatar_url}
              alt={'user.info'}
            />
          </div>
          <div>
            <p className={'t-user-bio'}>{user.name}</p>
            <p className={'t-user-name'}>{user.bio}</p>
          </div>
        </div>
      );
    } else {
      return (
        <p className={'t-no-user-info'}>Информация о пользователе не найдена</p>
      );
    }
  };

  renderIsLoading = () => <p>Загрузка информации о пользователе...</p>;

  render() {
    const { isLoading } = this.props;

    return <> {isLoading ? this.renderIsLoading() : this.renderUserInfo()} </>;
  }
}

export default connect(state => ({
  isLoading: getIsLoading(state),
  user: getUser(state)
}))(UserInfo);
