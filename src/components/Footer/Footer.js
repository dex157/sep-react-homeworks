import React, { PureComponent, Fragment } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {context => {
          const { isAuthorized, email } = context;
          if(isAuthorized && email === 'stu@dent.com') {
            return <Fragment>
            <p className="t-footer">Вы вошли как {email}</p>
          </Fragment>
          } else {
            return <p className="t-footer">Вы гость в этой системе</p>
          }
          // isAuthorized && email === 'stu@dent.com' ? (
          //   <Fragment>
          //     <p className="t-footer">Вы вошли как {email}</p>
          //   </Fragment>
          // ) : (
          //   <p className="t-footer">Вы гость в этой системе</p>
          // );
        }}
      </AuthConsumer>
    );
  }
}

export default Footer;
