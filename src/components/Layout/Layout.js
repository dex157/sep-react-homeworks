import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    const headerElement = header && this.renderHeader(header),
      footerElement = footer && this.renderFooter(footer),
      mainElement = (
        <main
          key="main"
          className={
            headerElement && footerElement
              ? 'main main--with-header main--with-footer'
              : footerElement
                ? 'main main--with-footer'
                : headerElement
                  ? 'main main--with-header'
                  : 'main'
          }
        >
          <p className="main__title section-title">Main</p>
          {children}
        </main>
      );

    return (
      <Fragment>
        {headerElement}
        {mainElement}
        {footerElement}
      </Fragment>
    )
  }

  renderHeader(HeaderChild) {
    return (
      <header key="header" className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <HeaderChild />
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer key="footer" className="footer">
        <SectionTitle className="header__title">Footer</SectionTitle>
        <FooterChild />
      </footer>
    )
  }
}

export default Layout;
