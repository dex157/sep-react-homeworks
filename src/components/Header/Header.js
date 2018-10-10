import React, { PureComponent, Fragment } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {context => {
          const { isAuthorized, email, logout } = context;
          if(isAuthorized && email === 'stu@dent.com') {
            return <Fragment>
              <p className="t-header-email">{email}</p>
              <Button className="t-logout" onClick={logout}>Logout</Button>
          </Fragment>
          } else {
            return "";
          }
          // isAuthorized && email === 'stu@dent.com' ? (
          //   <Fragment>
          //     <p className="t-header-email">stu@dent.com</p>
          //     <Button className="t-logout" onClick={logout}>
          //       Logout
          //     </Button>
          //   </Fragment>
          // ) : (
          //   ''
          // );
        }}
      </AuthConsumer>
    );
  }
}

export default Header;
