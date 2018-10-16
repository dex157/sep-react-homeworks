import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { connect } from 'react-redux';
import { getFollowers, getIsLoading } from '../../modules/Followers';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { followers, isLoading } = this.props;

    return (
      <div className={cx(styles.root, 't-followers')}>
        {isLoading && <p>Загрузка...</p>}
        {followers &&
          followers.map(({ id, login, avatar_url }) => (
            <div className={styles.follower} key={id}>
              {avatar_url && (
                <img
                  className={styles.followerImg}
                  src={avatar_url}
                  alt="follower"
                />
              )}
              {login && <p className={styles.followerLogin}>{login}</p>}
            </div>
          ))}
      </div>
    );
  }
}

export default connect(state => ({
  followers: getFollowers(state),
  isLoading: getIsLoading(state)
}))(Followers);
