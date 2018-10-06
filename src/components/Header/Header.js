import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
        <header className="header"><p className="header__title section-title">Header</p>
            <div className="header__content"></div>
        </header>
    );
  }
}

export default Header;
