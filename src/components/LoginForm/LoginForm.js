import React, { PureComponent } from 'react';
import { withAuth } from '../../context/Auth/Auth';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';
import cx from 'classnames';

const formFields = [
  {
    name: 'email',
    label: 'Почта'
  },
  {
    name: 'password',
    label: 'Пароль'
  }
];

class LoginForm extends PureComponent {
  state = {
    fields: {
      email: '',
      password: ''
    }
  };

  onChangeHandler = e => {
    const { fields } = this.state;

    this.setState({
      fields: {
        ...fields,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { authorize } = this.props;
    const {
      fields: { email, password }
    } = this.state;

    authorize(email, password);
  };

  renderFields = () => {
    const { fields } = this.state;

    return formFields.map(({ name, label }) => (
      <p key={name}>
        <label className={styles.labelText}>{label}</label>
        <input
          className={cx(styles.input, `t-input-${name}`)}
          name={name}
          onChange={this.onChangeHandler}
          value={fields[name]}
        />
      </p>
    ));
  };
  render() {
    const { isAuthorized, authError } = this.props;

    if (isAuthorized) {
      return <Redirect to="/app" />;
    }
    return (
      <div className={styles.bg}>
        <form
          className={cx(styles.form, 't-form')}
          onSubmit={this.onSubmitHandler}
        >
          {this.renderFields()}
          <div className={styles.error}>{authError}</div>
          <div className={styles.buttons}>
            <button className={cx(styles.button, 't-login')}>Войти</button>
          </div>
        </form>
      </div>
    );
  }
}
export default withAuth(LoginForm);
