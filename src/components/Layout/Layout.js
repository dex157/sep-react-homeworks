import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    const renderHeader = this.renderHeader;
    const renderFooter = this.renderFooter;

    return (
      <Fragment>
        {renderHeader(header)}
        <main
          className={`main ${header && 'main--with-header'} ${footer &&
            'main--with-footer'}`}
        >
          <SectionTitle className="main__title" children="Main" />
          {children}
        </main>
        {renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    if (HeaderChild) {
      return (
        <header className="header">
          <SectionTitle className="header__title">Header</SectionTitle>
          <HeaderChild />
        </header>
      );
    }
  }

  renderFooter(FooterChild) {
    if (FooterChild) {
      return (
        <footer className="footer">
          <SectionTitle className="footer__title">Footer</SectionTitle>
          <FooterChild />
        </footer>
      );
    }
  }
}

export default Layout;
