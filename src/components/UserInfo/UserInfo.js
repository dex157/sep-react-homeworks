import React, { PureComponent, Fragment } from 'react';
import styles from './UserInfo.module.css';
import { getUser, getUserIsLoading } from '../../modules/User';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { user, isLoading } = this.props;

    return (
      <div className={styles.root}>
        {isLoading && <p>Загрузка</p>}
        {user && (
          <Fragment>
            {user.avatar_url && (
              <div className={styles.imageWrapper}>
                <img
                  className={styles.image}
                  src={user.avatar_url}
                  alt="user info"
                />
              </div>
            )}

            <div>
              <p className="t-user-name">{user.name}</p>
              <p className="t-user-bio">{user.bio}</p>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  user: getUser(state),
  isLoading: getUserIsLoading(state)
}))(UserInfo);
