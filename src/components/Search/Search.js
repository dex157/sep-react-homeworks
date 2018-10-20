import React, { PureComponent } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import { connect } from 'react-redux';
import { fetchRequest as fetchUserRequest, getUser } from '../../modules/User';
import { fetchRequest as fetchFollowersRequest } from '../../modules/Followers';
import UserInfo from '../UserInfo';
import Followers from '../Followers';

class Search extends PureComponent {
  state = {
    user: ''
  };

  input = React.createRef();

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleKeyPress = event => {
    const { fetchUserRequest, fetchFollowersRequest } = this.props;
    const { user } = this.state;

    if (event.key === 'Enter' && user.length > 0) {
      fetchUserRequest(user);
      fetchFollowersRequest(user);
    }
  };

  componentDidMount() {
    this.input.current.focus();
  }

  renderResultSearch = () => {
    const { user } = this.props;
    if (user) {
      return (
        <>
          <UserInfo />
          <Followers />
        </>
      );
    } else {
      return (
        <>
          <p className={'t-no-user-info'}>Нет информации о пользователе</p>
          <p className={'t-no-followers'}>Нет информации о подписчиках</p>
        </>
      );
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div className={styles.root}>
        <Input
          ref={this.input}
          value={user}
          className="t-search-input"
          placeholder="Ник пользователя"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.renderResultSearch()}
      </div>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  { fetchUserRequest, fetchFollowersRequest }
)(Search);
