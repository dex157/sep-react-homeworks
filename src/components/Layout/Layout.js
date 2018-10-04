import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    const headClass = header ? "main--with-header" : '';
    const footClass = footer ? "main--with-footer" : '';
    return (
      <div>
        {header && <header className="header">
          <SectionTitle className='header-title'>HEADER</SectionTitle>
          <div className="header__content">
            {this.renderHeader(header)}          
          </div>
        </header>}
        <main className={`main ${headClass} ${footClass}`}>
          <SectionTitle className="main__title">MAIN</SectionTitle>
          {children}
        </main>
        {footer && <footer className="footer">
          <SectionTitle className="header__title">Footer</SectionTitle>
          {this.renderFooter(footer)}
        </footer>}
      </div>
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
