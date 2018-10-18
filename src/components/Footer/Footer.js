import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email }) =>
          isAuthorized ? (
            <p className="footer-message t-footer">Вы вошли как {email}</p>
          ) : (
            <p className="footer-message t-footer">Вы гость в этой системе</p>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Footer;
