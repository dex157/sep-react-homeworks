import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getFollowers, getIsLoading, getError } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';
import { getUser } from '../../modules/User';

class Followers extends PureComponent {
  createFollowers = (user, followers) => {
    if (followers.length === 0 && user.length === 0) {
      return (
        <p className={cx(styles.root, 't-no-followers')}>
          Нет информации о подписчиках
        </p>
      );
    } else if (followers.message === 'Not Found') {
      return (
        <p className={cx(styles.root, 't-no-followers')}>
          Информация о подписчиках не найдена
        </p>
      );
    } else {
      return (
        <div className={cx(styles.root, 't-followers')}>
          {followers.map(follower => (
            <div className={styles.follower} key={follower.id}>
              <img
                className={styles.followerImg}
                src={follower.avatar_url}
                alt="followers"
              />
              <p className={styles.followerLogin}>{follower.login}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    const { user, followers, isLoading, error } = this.props;

    if (isLoading) {
      return <p className={styles.root}>Ищу подписчиков...</p>;
    } else {
      if (error !== null) {
        return <p className={styles.root}>{error}</p>;
      } else {
        return this.createFollowers(user, followers);
      }
    }
  }
}

export default connect(state => ({
  user: getUser(state),
  followers: getFollowers(state),
  isLoading: getIsLoading(state),
  error: getError(state)
}))(Followers);
