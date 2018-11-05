import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getUser, getIsLoading, getError } from '../../modules/User';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const {data, error} = this.props;
    const renderIsLoading = () => {
      return (
        <p>Подождите, идет загрузка</p>
      )
    }
    const renderError = () => {
      return (
        <p>Прозошла ошибка</p>
      )
    }
    const render = () => {
      return (
        <div className={styles.imageWrapper}>
          <img
           className={styles.image}
           src={data.avatar_url}
           />
           <p>{data.name}</p>
        </div>
      )
    }
    if(data){
      return (
        <div className={styles.root}>
        {render()}
        </div>
      );
    }
    else if (error) {
      return(renderError());
    }
     else {
      return (renderIsLoading());
    }
  }
}



const mapStateToProps = (state) => ({
  data: getUser(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

export default connect(
  mapStateToProps,
)(UserInfo);