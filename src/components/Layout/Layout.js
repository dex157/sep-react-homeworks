import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    let {header, footer, children} = this.props,
        withHeader = header ? 'main--with-header' : '',
        withFooter = footer ? 'main--with-footer' : '';

    return (
      <Fragment>
        {
          header && (
        <header className = "header">
          <SectionTitle className = "header__title">HEADER</SectionTitle>
          <div className = "header__content">
            { header && this.renderHeader(header) }
          </div>
        </header>
          )}

        <main className = { `main ${withHeader} ${withFooter}`}>
          <SectionTitle className = "main__title">MAIN</SectionTitle>
          {children}
        </main>
        
        {
          footer && (
        <footer className = "footer">
          <SectionTitle className = "header_title">FOOTER</SectionTitle>
            { footer && this.renderFooter(footer) }
        </footer>
          )}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return <HeaderChild />;
  }

  renderFooter(FooterChild) {
    return <FooterChild />;
  }
}

export default Layout;
