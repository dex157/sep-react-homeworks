import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer } = this.props;
    return [ 
      header && this.renderHeader(header), 
      this.renderMain(), 
      footer && this.renderFooter(footer)
    ];
  }

  renderHeader(HeaderChild) {
    return (
      <header className={'header'}>
        <SectionTitle className={'header__title'} children="HEADER" />
        <div className={'header__content'}>
          <HeaderChild />
        </div>
      </header>
    );
  }

  renderMain() {
    const { header, footer, children } = this.props;
    
    return (
      <main className={`main ${header && 'main--with-header'}  ${footer && 'main--with-footer'}`}>
        <SectionTitle className={'main__title'} children="MAIN" />
        {children}
      </main>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className={'footer'}>
        <SectionTitle className={'footer__title'} children="FOOTER" /> 
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
