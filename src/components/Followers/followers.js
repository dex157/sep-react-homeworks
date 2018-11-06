import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getData, getIsLoading } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { data, isLoading } = this.props;

    if (isLoading)
      return (
        <p className="t-no-user-info">Загрузка информации о подписчиках</p>
      );
    if (!data)
      return <p className="t-no-user-info">Нет информации о подписчиках</p>;

    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(user => (
          <div key={user.id}>
            <img
              className={styles.followerImg}
              src={user.avatar_url}
              alt={user.login}
            />
            <p className={styles.followerLogin}>{user.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(Followers);
