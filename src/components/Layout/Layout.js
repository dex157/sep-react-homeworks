import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    return (
      <div>
        {this.props.header ? (
          <header className="header">
            <SectionTitle className="header__title">Header</SectionTitle>
            <div className="header__content">
              {this.renderHeader(this.props.header)}
            </div>
          </header>
        ) : (
          ''
        )}
        <main
          className={
            'main ' +
            (this.props.header ? 'main--with-header ' : '') +
            (this.props.footer ? 'main--with-footer ' : '')
          }
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {this.props.children}
        </main>
        {this.props.footer ? (
          <footer className="footer">
            <SectionTitle className="header__title">Footer</SectionTitle>
            <div className="footer-message t-footer">
              {this.renderFooter(this.props.footer)}
            </div>
          </footer>
        ) : (
          ''
        )}
      </div>
    );
  }

  renderHeader(HeaderChild) {
    return HeaderChild ? <HeaderChild /> : '';
  }

  renderFooter(FooterChild) {
    return FooterChild ? <FooterChild /> : '';
  }
}

export default Layout;
