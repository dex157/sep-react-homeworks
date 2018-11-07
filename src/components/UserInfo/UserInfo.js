import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getIsLoading, getData } from '../../modules/User';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const {isLoading, data } = this.props;

    if (isLoading) return <p>Loading user info...</p>;
    if (!data) return null;

    return (
      <div className={styles.root}>
        <div className = { styles.imageWrapper }>
          <img className = { styles.image } src = { data.avatar_url } alt = { data.login } />
        </div>
        <div>
          <p className = "t-user-name">{ data.name }</p>
          <p className = "t-user-bio">{ data.bio }</p>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state),
}))(UserInfo);
