import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { children, header, footer } = this.props;
    return (
      <Fragment>
        {this.renderHeader(header)}
        <main className="main main--with-header main--with-footer">
          <SectionTitle className="main__title" children="Main" />
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className={'header__title'} children={'Header'} />
        <HeaderChild />
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className={'footer__title'} children={'Footer'} />
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
