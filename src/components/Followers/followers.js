import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { data: followers } = this.props;

    return followers !== null ? (
      <div className={cx(styles.root, 't-followers')}>
        {followers.map(follower => (
          <div key={follower.id} className={styles.follower}>
            <img
              className={styles.followerImg}
              src={follower.avatar_url}
              alt="user_avatar"
            />
            <p className={styles.followerLogin}>{follower.login}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="t-no-followers">Нет информации о подписчиках</p>
    );
  }
}

export default connect(state => ({ ...state.followers }))(Followers);