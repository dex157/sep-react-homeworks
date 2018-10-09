import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props
    return (
      <Fragment>
        {header ? this.renderHeader(header) : null}
        <main className={`main ${header ? "main--with-header" : ""} ${footer ? "main--with-footer" : ""}`}>
          <SectionTitle className="main__title">
            {"main"}
          </SectionTitle>
          {children}
        </main>
        {footer ? this.renderFooter(footer) : null}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">
          {"header"}
        </SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle>
          {"footer"}
        </SectionTitle>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
