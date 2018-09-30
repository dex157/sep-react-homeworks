import React from 'react';
import { AuthProvider } from './Auth';
import { mount } from 'enzyme';

describe('AuthProvider', () => {
  const wrapper = mount(<AuthProvider />);

  describe('Содержит методы', () => {
    ['authorize', 'logout', 'getProviderValue'].forEach(methodName => {
      it(methodName, () => {
        expect(wrapper.instance()[methodName]).toBeDefined();
      });
    });
  });

  describe('State содержит ключи', () => {
    const stateKeys = Object.keys(wrapper.state());
    ['email', 'authorizeError', 'isAuthorized'].forEach(field => {
      it(field, () => {
        expect(stateKeys.indexOf(field)).not.toBe(-1);
      });
    });
  });

  describe('Функция getProviderValue возвращает объект с ключами', () => {
    const providerValueKeys = Object.keys(
      wrapper.instance().getProviderValue()
    );
    ['email', 'isAuthorized', 'authorizeError', 'authorize', 'logout'].forEach(
      key => it(key, () => expect(providerValueKeys.indexOf(key)).not.toBe(-1))
    );
  });

  describe('Функция authorize c верными аргументами', () => {
    wrapper.instance().authorize('stu@dent.com', '123');
    it('Меняет state.isAuthorized на true', () => {
      expect(wrapper.state().isAuthorized).toBeTruthy();
    });

    it('Устанавливает state.email из аргумента', () => {
      wrapper.instance().authorize('stu@dent.com', '123');
      expect(wrapper.state().email).toBe('stu@dent.com');
    });

    it('Очищает state.authorizeError', () => {
      wrapper.setState({ authorizeError: 'some error' });
      wrapper.instance().authorize('stu@dent.com', '123');
      expect(wrapper.state().authorizeError).toBe('');
    });
  });

  describe('Функция authorize c неверными аргументами', () => {
    it('Устанавливает ошибку в state.authorizeError', () => {
      wrapper.instance().authorize('stu@dent.co', '123');
      expect(wrapper.state().authorizeError).toBe(
        'Email или пароль введён не верно'
      );
    });
  });

  describe('Функция logout', () => {
    it('Устанавливает state.isAuthorized: false', () => {
      wrapper.instance().authorize('stu@dent.co', '123');
      wrapper.instance().logout()
      expect(wrapper.state().isAuthorized).toBeFalsy();
    });
  });
});
