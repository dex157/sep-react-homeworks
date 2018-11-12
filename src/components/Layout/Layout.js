import React, { Fragment, PureComponent } from "react";
import SectionTitle from "../SectionTitle";
import "./Layout.css";

class Layout extends PureComponent {


  render() {
    const {header, footer, children} = this.props;
    return (
      <Fragment>
        {this.renderHeader(header)}
        <main className={this.getClassForMain(header, footer)}>
          <SectionTitle className={"main__title"}>Main</SectionTitle>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  getClassForMain(header, footer){
    const headerClass = " main--with-header";
    const footerClass = " main--with-footer";

    let summaryClass = "main";

    if (header) {
      summaryClass += headerClass;
    }

    if (footer) {
      summaryClass += footerClass;
    }

    return summaryClass;
  }

  renderHeader(HeaderChild) {
    return (
      HeaderChild ? (
      <Fragment>
        <header className="header">
          <SectionTitle className={"header__title"}>Header</SectionTitle>
          <div className="header__content">
            <HeaderChild/>
          </div>
        </header>
      </Fragment>):('')
    );
  }

  renderFooter(FooterChild) {
    return (
      FooterChild ? (
      <Fragment>
        <footer className="footer">
          <SectionTitle className={"header__title"}>Footer</SectionTitle>
          <FooterChild/>
        </footer>
      </Fragment>) : ('')
    );
  }
}

export default Layout;
