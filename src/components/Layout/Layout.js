import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    return <Fragment>{header ? this.renderHeader(header) : null}</Fragment>;
  }

  renderHeader(HeaderChild) {
    const { header } = this.props;
    return (
      <header className="header">
        <SectionTitle className="header__title">{header.name}</SectionTitle>
        <HeaderChild />
      </header>
    );
  }

  renderFooter(FooterChild) {
    return 'empty';
  }
}

export default Layout;
