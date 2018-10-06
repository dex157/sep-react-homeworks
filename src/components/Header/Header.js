import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';
import SectionTitle from "../SectionTitle/SectionTitle";

class Header extends PureComponent {
  render() {
    return (
        <div className="header__content"></div>
    );
  }
}

export default Header;
