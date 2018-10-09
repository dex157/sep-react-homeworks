import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;

    return (
      <Fragment>
        {this.renderHeader(header)}
        <main
          className={`main ${header ? 'main--with-header' : ''} ${
            footer ? 'main--with-footer' : ''
          }`}
        >
          <SectionTitle className={'main__title'} children={'main'} />
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return HeaderChild ? (
      <header className="header">
        <SectionTitle className={'header__title'} children={'Header'} />
        <HeaderChild />
      </header>
    ) : (
      ''
    );
  }

  renderFooter(FooterChild) {
    return FooterChild ? (
      <footer className="footer">
        <SectionTitle className={'footer__title'} children={'Footer'} />
        <FooterChild />
      </footer>
    ) : (
      ''
    );
  }
}

export default Layout;
