import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { fetchRequest } from '../../modules/User';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    console.log("UserInfo");
    console.log(this.props);
    console.log(this.state);


    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} alt="user info" />
        </div>
        <div>
          <p className='t-user-name'></p>
          <p className='t-user-bio'></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user.data,
  isLoading: state.user.isLoading,
  error: state.user.error,
});

const mapDispatchToProps = { fetchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);

/*
data: {message: "Bad credentials", documentation_url: "https://developer.github.com/v3"}
*/