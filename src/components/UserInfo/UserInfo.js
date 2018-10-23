import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getUser, getIsLoading } from '../../modules/User';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { data, isLoading} = this.props;
    
    if (!data) return <p className="t-no-user-info">Нет информации о пользователе</p>
    if (isLoading) return <p className="t-no-user-info">Загрузка информации о пользователе</p>

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={data.avatar_url} alt="user info"/>
        </div>
        <div>
          <p className='t-user-name'>{data.name}</p>
          <p className='t-user-bio'>{data.bio}</p>
        </div>

      </div>
    );
  }
}

export default connect(state => ({
  data: getUser(state),
  isLoading: getIsLoading(state),
}))(UserInfo);
