import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
    render() {
        return (
            <AuthConsumer>
                {({ isAuthorized, email }) => {
                    return (
                        <p className="footer-message t-footer">
                            {isAuthorized === true
                                ? `Вы вошли как ${email}`
                                : 'Вы гость в этой системе'}
                        </p>
                    );
                }}
            </AuthConsumer>
        );
    }
}

export default Footer;
