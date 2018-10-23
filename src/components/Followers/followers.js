import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getFollower, getIsLoading } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames'

class Followers extends PureComponent {
  render() {
    const { data, isLoading} = this.props;

    if (!data) return <p className="t-no-user-info">Нет информации о подписчиках</p>
    if (isLoading) return <p className="t-no-user-info">Загрузка информации о подписчиках</p>

    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(follower => (
          <div key={follower.id} className={styles.follower}>
            <img className={styles.followerImg} src={follower.avatar_url} alt="follower img"/>
            <p className={styles.followerLogin}>{follower.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  data: getFollower(state),
  isLoading: getIsLoading(state),
}))(Followers);
