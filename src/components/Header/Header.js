import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email, logout }) =>
          isAuthorized ? (
            <div className="header__content">
              <div className="header-menu">
                <p className="header-menu__email header-email t-header-email">
                  {email}
                </p>
                <Button
                  onClick={logout}
                  className={'header-menu__button t-logout button'}
                  children={'Выйти'}
                />
              </div>
            </div>
          ) : (
            ''
          )
        }
      </AuthConsumer>
    );
  }
}

export default Header;
