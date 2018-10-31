import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getUser, getUserIsLoading, getUserError } from '../../modules/User';
import cx from 'classnames';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  renderSpecificContent() {
    const { user, isLoading, error } = this.props;

    if (isLoading) {
      return <p className={styles.root}>Загрузка информации о пользователе</p>;
    }
    if (error) {
      return <p className={styles.root}>{error}</p>;
    }
    if (!user) {
      return (
        <p className={cx(styles.root, 't-no-user-info')}>
          Нет информации о пользователе
        </p>
      );
    }
    return false;
  }
  render() {
    const specificContent = this.renderSpecificContent();

    if (specificContent) {
      return specificContent;
    }

    const {
      user: { name, bio, avatar_url }
    } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          {avatar_url && (
            <img className={styles.image} src={avatar_url} alt="user info" />
          )}
        </div>
        <div>
          {name && <p className="t-user-name">{name}</p>}
          {bio && <p className="t-user-bio">{bio}</p>}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  user: getUser(state),
  isLoading: getUserIsLoading(state),
  error: getUserError(state)
}))(UserInfo);
