import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;

    return (
      <Fragment>
        {header ? this.renderHeader(header) : null}
        <main className={`main 
          ${header ? 'main--with-header' : ''} 
          ${footer ? 'main--with-footer' : ''} `}>
          <SectionTitle className="main__title" children='MAIN' />
          {children}
        </main>
        {footer ? this.renderFooter(footer) : null}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    const { header } = this.props;

    return (
      <header className="header">
        <SectionTitle className="header__title" children='HEADER' />
        <HeaderChild />
      </header>
    );
  }

  renderFooter(FooterChild) {
    const { footer } = this.props;

    return (
      <footer className="footer">
        <SectionTitle className="footer__title" children='FOOTER' />
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
