import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends PureComponent {
  render() {
    const {header, footer, children} = this.props
    return (
      <Fragment>
        {header && this.renderHeader({header})}
        <main className={`main ${header && "main--with-header"} ${footer && "main--with-footer"}`}>
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        {footer && this.renderFooter({footer})}
      </Fragment>)
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <Header/>
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <Footer/>
      </footer>
    );
  }
}

export default Layout;
