import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {



    return (
      <div className={styles.root}>

      </div>
    );
  }
}

export default connect(state => ({
}))(UserInfo);
