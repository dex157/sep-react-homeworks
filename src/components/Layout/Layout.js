import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';
// import Footer from '../Footer';

class Layout extends PureComponent {
  render() {
    let { children, header, footer } = this.props;
    return (
      <Fragment>
        {header && this.renderHeader(header)}
        <main
          className={`main ${header && 'main--with-header'} ${footer &&
            'main--with-footer'}`}
        >
          {children}
        </main>
        {footer && this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">HEADER</SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className="footer__title">FOOTER</SectionTitle>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
