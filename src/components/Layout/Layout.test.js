/*  eslint-disable */
import React from 'react';
import Layout from './Layout';
import { shallow } from 'enzyme';

describe('Лэйаут без пропсов header и footer', () => {
  const wrapper = shallow(<Layout />);

  it('Не выводит хедер', () => expect(wrapper.find('.header').length).toBe(0));
  it('Не выводит футер', () => expect(wrapper.find('.footer').length).toBe(0));
  it('Класс тега main не содержит main--with-header', () => {
    expect(
      wrapper
        .find('main')
        .prop('className')
        .includes('main--with-header')
    ).toBeFalsy();
  });
  it('Класс тега main не содержит main--with-footer', () => {
    expect(
      wrapper
        .find('main')
        .prop('className')
        .includes('main--with-footer')
    ).toBeFalsy();
  });
});

describe('Лэйаут c пропсом header', () => {
  const Header = () => <header />;
  const wrapper = shallow(<Layout header={Header} />);

  it('Выводит хедер', () => expect(wrapper.find('.header').length).toBe(1));
  it('Не выводит футер', () => expect(wrapper.find('.footer').length).toBe(0));
  it('Класс тега main содержит main--with-header', () => {
    expect(
      wrapper
        .find('main')
        .prop('className')
        .includes('main--with-header')
    ).toBeTruthy();
  });
  it('Класс тега main не содержит main--with-footer', () => {
    expect(
      wrapper
        .find('main')
        .prop('className')
        .includes('main--with-footer')
    ).toBeFalsy();
  });
});

describe('Лэйаут c пропсом footer', () => {
  const Footer = () => <footer />;
  const wrapper = shallow(<Layout footer={Footer} />);

  it('Не выводит хедер', () => expect(wrapper.find('.header').length).toBe(0));
  it('Выводит футер', () => expect(wrapper.find('.footer').length).toBe(1));
  it('Класс тега main не содержит main--with-header', () => {
    expect(
      wrapper
        .find('main')
        .prop('className')
        .includes('main--with-header')
    ).toBeFalsy();
  });
  it('Класс тега main содержит main--with-footer', () => {
    expect(
      wrapper
        .find('main')
        .prop('className')
        .includes('main--with-footer')
    ).toBeTruthy();
  });
});
