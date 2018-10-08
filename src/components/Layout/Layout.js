import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
    render() {
        const { header, children, footer } = this.props;

        return [
            this.checkBlock(header, this.renderHeader(header)),
            this.renderMain(children),
            this.checkBlock(footer, this.renderFooter(footer))
        ];
    }

    checkBlock(checkElem, output) {
        return checkElem ? output : '';
    }

    renderHeader(HeaderChild) {
        return (
            <header key="header" className="header">
                <SectionTitle className={'header__title'} children="Header" />
                {HeaderChild && <HeaderChild />}
            </header>
        );
    }

    renderMain(children) {
        const { header, footer } = this.props;
        return (
            <main
                className={`main ${this.checkBlock(
                    header,
                    'main--with-header'
                )} ${this.checkBlock(footer, 'main--with-footer')}`}
                key="main"
            >
                <SectionTitle className={'main__title'} children="MAIN" />
                {children}
            </main>
        );
    }

    renderFooter(FooterChild) {
        return (
            <footer key="footer" className="footer">
                <SectionTitle className={'header__title'} children="Footer" />
                {FooterChild && <FooterChild />}
            </footer>
        );
    }
}

export default Layout;
