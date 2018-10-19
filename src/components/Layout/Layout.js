import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;

    return (
      <Fragment>
        {header ? this.renderHeader(header) : null}
        {this.renderMain(header, footer, children)}
        {footer ? this.renderFooter(footer) : null}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle
          className="header__title"
          children='HEADER'
        />
        <HeaderChild />
      </header>
    );
  }

  renderMain(header, footer, children) {
    return (
      <main className={`main 
        ${header ? 'main--with-header' : ''} 
        ${footer ? 'main--with-footer' : ''} `}>
        <SectionTitle
          className="main__title"
          children='MAIN' 
        />
        {children}
      </main>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle
          className="footer__title"
          children='FOOTER'
        />
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
