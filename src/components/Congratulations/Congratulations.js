import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';


class Congratulations extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ email }) => (
          <p class="t-congratulation">
            <span role="img" aria-label="congratulations!">
              🎉
            </span>
            Поздравляем {email} !
            <span role="img" aria-label="congratulations!">
              🎉
            </span>
            <br /> Вы вошли в систему!
          </p>
        )}
      </AuthConsumer>
    );
  }
}

export default Congratulations;
