import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getIsLoading, getFollowers } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  renderList = () => {
    const { followers } = this.props;
    if (followers && Array.isArray(followers)) {
      return (
        <div className={cx(styles.root, 't-followers')}>
          {followers.map(el => {
            return (
              <div key={el.login} className={styles.follower}>
                <img
                  src={el.avatar_url}
                  className={styles.followerImg}
                  alt={''}
                />
                <p className={styles.followerLogin}>{el.login}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <p className={'t-no-followers'}>Информация о подписчиках не найдена</p>
      );
    }
  };

  renderIsLoading = () => <p>Загрузка информации о подписчиках...</p>;

  render() {
    const { isLoading } = this.props;

    return <> {isLoading ? this.renderIsLoading() : this.renderList()} </>;
  }
}

export default connect(state => ({
  isLoading: getIsLoading(state),
  followers: getFollowers(state)
}))(Followers);
