import React from 'react';
import Footer from './Footer';
import { TestProvider } from '../../contexts/Auth';
import { mount } from 'enzyme';

describe("Футер c контекстом { isAuthorized: true, email: 'test@test.ru' }", () => {
  const context = { isAuthorized: true, email: 'test@test.ru' };
  const wrapper = mount(
    <TestProvider value={context}>
      <Footer />
    </TestProvider>
  );

  it('p.t-footer содержит: Вы вошли как test@test.ru', () => {
    expect(wrapper.find('p.t-footer').text()).toBe('Вы вошли как test@test.ru');
  });
});

describe("Футер c контекстом { isAuthorized: false }", () => {
  const context = { isAuthorized: false };
  const wrapper = mount(
    <TestProvider value={context}>
      <Footer />
    </TestProvider>
  );

  it('p.t-footer содержит: Вы гость в этой системе', () => {
    expect(wrapper.find('p.t-footer').text()).toBe('Вы гость в этой системе');
  });
});
