import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email }) =>
          isAuthorized ? (
            <p className="t-footer footer-message">Вы вошли как {email}</p>
          ) : (
            <p className="t-footer footer-message">Вы гость в этой системе</p>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Footer;
