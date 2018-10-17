import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getFollowers, getIsLoading, getError, fetchRequest } from '../../modules/Followers';
import { getUser } from '../../modules/User';
import { connect } from 'react-redux';
import cx from 'classnames'

class Followers extends PureComponent {
  renderFollowers = (user, followers) => {
    if  ((followers.length === 0) && (user.length === 0)) {
      return (
        <p className = 't-no-followers'>
          Нет информации о подписчиках
        </p>
      )
    } else if (followers.message === 'Not Found') {
      return (
        <p className = 't-no-followers'>
          Информация о подписчиках не найдена
        </p>
      )
    } else {
      return (
        <div className = {cx(styles.root, 't-followers')}>
          {followers.map(follower => (
            <div className = {styles.follower} key={follower.id}>
              <img 
                className = {styles.followerImg}
                src = {follower.avatar_url}
                alt = 'follower info' 
              />
              <p className = {styleMedia.followerLogin}>
                {follower.login}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    const { user, followers, isLoading, error } = this.props;

    if (isLoading) {
      return <p className = 't-no-followers'>Загрузка информации о подписчиках</p>
    } else {
      if (error !== null) {
        return <p className = 't-no-followers'>Произошла ошибка: {error} </p>
      } else {
        return this.renderFollowers(user, followers);
      }
    }
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  followers: getFollowers(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});
const mapDispatchToProps = { fetchRequest };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);