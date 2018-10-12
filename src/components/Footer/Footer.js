import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {context => (
          <p className="footer-message t-footer">
            {context.isAuthorized ? `Вы вошли как ${context.email}` : 'Вы гость в этой системе'}
          </p>
        )}
      </AuthConsumer>
    )
  }
}

export default Footer;
