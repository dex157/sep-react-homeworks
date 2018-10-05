import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const {
      header,
      footer,
      children
    } = this.props;

    return (
      <Fragment>
        {header ? Layout.renderHeader(header) : null}
        <main className={`main
          ${header ? 'main--with-header' : ''}
          ${footer ? 'main--with-footer' : ''} `}
        >
          <SectionTitle className="main__title" children="MAIN"/>
          {children}
        </main>
        {footer ? Layout.renderFooter(footer) : null}
      </Fragment>
    );
  }

  static renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title" children="HEADER"/>
        <HeaderChild />
      </header>
    );
  }

  static renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className="footer__title" children="FOOTER"/>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
