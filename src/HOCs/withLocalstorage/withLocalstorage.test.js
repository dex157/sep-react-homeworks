import React from 'react';
import withLocalstorage from './withLocalstorage';
import { mount } from 'enzyme';
import * as localstorage from '../../localstorage'

jest.mock('../../localstorage');

const TestComponent = () => React.createElement('p', null, 'test');
const wrapper = mount(
  React.createElement(withLocalstorage('asd', [])(TestComponent))
);
const testComponent = wrapper.find('TestComponent');

it('У обернутого компонента появляются props: savedData и saveData', () => {
  const propsKeys = Object.keys(testComponent.props());

  expect(propsKeys).toContain('savedData');
  expect(propsKeys).toContain('saveData');
});

it('Вызов saveData вызывает save из модуля localstorage', () => {
  const mockFn = jest.fn()

  localstorage.save.mockImplementation(mockFn)
  testComponent.props().saveData()

  expect(mockFn).toBeCalled()
});

