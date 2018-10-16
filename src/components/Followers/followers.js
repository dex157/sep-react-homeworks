import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import {
  getFollowers,
  getFollowersIsLoading,
  getFollowersError
} from '../../modules/Followers';
import cx from 'classnames';
import { connect } from 'react-redux';

class Followers extends PureComponent {
  renderSpecificContent() {
    const { folowers, isLoading, error } = this.props;

    if (isLoading) {
      return <p className={styles.root}>Загрузка информации о подписчиках</p>;
    }
    if (error) {
      return <p className={styles.root}>{error}</p>;
    }
    if (!folowers) {
      return (
        <p className={cx(styles.root, 't-no-followers')}>
          Нет информации о подписчиках
        </p>
      );
    }
    return false;
  }
  renderFollowers() {
    const { folowers } = this.props;

    return folowers.map(({ id, login, avatar_url }) => (
      <div className={styles.follower} key={id}>
        {avatar_url && (
          <img className={styles.followerImg} src={avatar_url} alt="follower" />
        )}
        {login && <p className={styles.followerLogin}>{login}</p>}
      </div>
    ));
  }

  render() {
    const specificContent = this.renderSpecificContent();

    if (specificContent) {
      return specificContent;
    }

    return (
      <div className={cx(styles.root, 't-followers')}>
        {this.renderFollowers()}
      </div>
    );
  }
}

export default connect(state => ({
  folowers: getFollowers(state),
  isLoading: getFollowersIsLoading(state),
  error: getFollowersError(state)
}))(Followers);
