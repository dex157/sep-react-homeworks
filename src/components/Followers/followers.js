import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {  } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames'
import { getFollowers, getIsLoading, getError } from '../../modules/Followers';

class Followers extends PureComponent {
  render() {
    const {data} = this.props;
    return (
      <div className={cx(styles.root, 't-followers')}>
      {data ? (<p>List followers</p>) : <p>No Followes</p>}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: getFollowers(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

export default connect(
  mapStateToProps,
)(Followers);