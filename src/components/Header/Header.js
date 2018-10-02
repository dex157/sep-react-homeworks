import React, { PureComponent, Fragment } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    const {getProviderValue} = AuthConsumer;
    return (
      <Fragment>
        {console.log(getProviderValue)}
        <p>1</p>
        <p>1</p>
      </Fragment>
    );
  }
}

export default Header;
