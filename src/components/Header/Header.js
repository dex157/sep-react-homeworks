import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {context =>
          context.isAuthorized && (
            <div className="header__content">
              <div className="header-menu">
                <p className="header-menu__email header-email t-header-email">
                  {context.email}
                </p>
                <Button
                  onClick={context.logout}
                  className="header-menu__button t-logout"
                >
                  Выйти
                </Button>
              </div>
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Header;
