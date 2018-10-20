import React, { PureComponent, Fragment } from 'react';
import styles from './UserInfo.module.css';
import { getUser, getIsLoading, getError } from '../../modules/User';
import { connect } from 'react-redux';
import cx from 'classnames';

class UserInfo extends PureComponent {
  createUser = user => {
    if (user.length === 0) {
      return (
        <p className={cx(styles.root, 't-no-user-info')}>
          Нет информации о пользователе
        </p>
      );
    } else if (user.message === 'Bad credentials') {
      return (
        <p className={cx(styles.root, 't-no-user-info')}>Incorrect Token</p>
      );
    } else if (user.message === 'Not Found') {
      return (
        <p className={cx(styles.root, 't-no-user-info')}>
          Нет информации о пользователе
        </p>
      );
    } else {
      const { avatar_url, name, bio } = user;

      return (
        <div className={styles.root}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={avatar_url} alt="user" />
          </div>
          <Fragment>
            <p className="t-user-name">{name}</p>
            <p className="t-user-bio">{bio}</p>
          </Fragment>
        </div>
      );
    }
  };

  render() {
    const { user, isLoading, error } = this.props;

    if (isLoading) {
      return <p className={styles.root}>Ищу пользователя...</p>;
    } else {
      if (error !== null) {
        return <p className={styles.root}>{error}</p>;
      } else {
        return this.createUser(user);
      }
    }
  }
}

export default connect(state => ({
  user: getUser(state),
  isLoading: getIsLoading(state),
  error: getError(state)
}))(UserInfo);
