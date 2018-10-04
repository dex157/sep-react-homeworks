import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <p className={'footer-message t-footer'}>
        <AuthConsumer>
          {({isAuthorized, email}) =>
            isAuthorized 
              ? `Вы вошли как ${email}`
              : 'Вы гость в этой системе'
          }
        </AuthConsumer>
      </p>
    );
  }
}

export default Footer;
