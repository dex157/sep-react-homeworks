import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getIsLoading, getData } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames'

class Followers extends PureComponent {
  render() {
    const { isLoading, data } = this.props;

    if (isLoading) return <p>Loading foloowers list...</p>;
    if (!data) return null;

    return (
      <div className={cx(styles.root, 't-followers')}>
        { data.map(follower => 
          <div key = { follower.id } className = { cx(styles.follower) } >
            <img className = { cx(styles.followerImg) } src = { follower.avatar_url } alt = { follower.login } />
            <p className = { cx(styles.followerLogin) }>{ follower.login }</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state),
}))(Followers);
