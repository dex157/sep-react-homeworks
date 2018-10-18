import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getUser, getIsLoading, getError, fetchRequest } from '../../modules/User';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  renderUser = (user) => {
    if (user.length === 0) {
      return (
        <p className = 't-no-user-info'>
          Нет информации о пользователе
        </p>
      )
    } else if (user.message === 'Bad credentials') {
      return (
        <p className = 't-no-user-info'>
          Введенный Вами токен некорректен.
        </p>
      )
    } else if (user.message === 'Not Found') {
      return (
        <p className = 't-no-user-info'>
          Информация о пользователе не найдена
        </p>
      )
    } else {
      const { avatar_url, name, bio } = user;

      return (
        <div className = {styles.root}>
          <div className = {styles.imageWrapper}>
            <img 
              className = {styles.image} 
              src = {avatar_url} 
              alt = 'user info'
            />
          </div>
          <div>
            <p className = 't-user-name'>{name}</p>
            <p className = 't-user-bio'>{bio}</p>
          </div>
        </div>
      );
    }
  };

  render() {
    const { user, isLoading, error } = this.props;

    if (isLoading) {
      return <p className = 't-no-user-info'>Загрузка информации о пользователе</p>
    } else {
      if (error !== null) {
        return <p className = 't-no-user-info'>Произошла ошибка: {error} </p>
      } else {
        return this.renderUser(user)
      }
    }
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  followers: getUser(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});
const mapDispatchToProps = { fetchRequest };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);