import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {  } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames'

class Followers extends PureComponent {
  render() {


    return (
      <div className={cx(styles.root, 't-followers')}>

      </div>
    );
  }
}

export default connect(state => ({
}))(Followers);
