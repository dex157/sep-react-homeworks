import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';
import composeClassNames from '../../utils/composeClassNames';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;

    return (
      <Fragment>
        {this.renderHeader(header)}
        <main
          className={composeClassNames(
            'main',
            header && 'main--with-header',
            footer && 'main--with-footer'
          )}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return HeaderChild ? (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <HeaderChild />
      </header>
    ) : null;
  }

  renderFooter(FooterChild) {
    return FooterChild ? (
      <footer className="footer">
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <FooterChild />
      </footer>
    ) : null;
  }
}

export default Layout;
