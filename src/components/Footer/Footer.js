import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
        <p className="footer-message t-footer">Вы гость в этой системе</p>
    );
  }
}

export default Footer;
