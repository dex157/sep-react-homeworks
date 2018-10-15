import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    console.log(this.props, this.state);
    const {user} = this.props;

    return (
      <div className={styles.root}>
        {user.data && (
          <div>
          <div className={styles.imageWrapper}>
          <img className={styles.image} src={user.data.avatar_url} alt="user info"/>
        </div>
        <div>
          <p className="t-user-name">
            {user.data.name}
          </p>
          <p className="t-user-bio">
            {user.data.bio}
          </p>
        </div>
        </div>
        )}
        
      </div>
    );
  }
}

export default connect(state => ({user: state.user,
}))(UserInfo);
