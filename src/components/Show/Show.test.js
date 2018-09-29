import React from 'react';
import Show from './Show';
import { shallow } from 'enzyme';

describe('Приложение написано с использованием gDSFP', () => {
  const wrapper = shallow(<Show />);

  it('Стейт содержит только 2 поля, showId и data', () => {
    const state = wrapper.state();
    expect(Object.keys(state).sort()).toEqual(['showId', 'data'].sort());
  });

  describe('Компонент содержит', () => {
    it('Метод componentDidUpdate', () => {
      expect(wrapper.instance().componentDidUpdate).toBeDefined();
    });
  });

  describe('Компонент НЕ содержит', () => {
    it('Статичный метод getDerivedStateFromProps', () => {
      expect(Show.getDerivedStateFromProps).toBeUndefined();
    });
    it('Метод componentDidMount', () => {
      expect(wrapper.instance().componentDidMount).toBeUndefined();
    });
  });
});
