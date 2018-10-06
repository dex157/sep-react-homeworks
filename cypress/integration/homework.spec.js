describe('Mail app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  function login() {
    cy.get('.t-input-email').type('test@test.ru');
    cy.get('.t-input-password').type('321');
    cy.get('.t-login').click();
  }

  function checkNav() {
    cy.get('.t-nav-list');
    cy.get('.t-link-home');
    cy.get('.t-link-inbox');
    cy.get('.t-link-outbox');
  }

  function goToOutboxEmail() {
    cy.get('.t-link-outbox').click();
    cy.get('[href="/app/outbox/rPeMc6ViYknygqyQnjXuPHRq"]').click();
    cy.url().should(
      'eq',
      `${Cypress.config().baseUrl}/app/outbox/rPeMc6ViYknygqyQnjXuPHRq`
    );
  }

  function goToInboxEmail() {
    cy.get('.t-link-inbox').click();
    cy.get('[href="/app/inbox/yGmwergEGcxbgssBXsVGyH6b"]').click();
    cy.url().should(
      'eq',
      `${Cypress.config().baseUrl}/app/inbox/yGmwergEGcxbgssBXsVGyH6b`
    );
  }

  it('При открытии сайта открывается форма', () => {
    cy.get('.t-form');
  });

  it('При вводе данных происходит логин и редирект на /app', () => {
    login();
    cy.url().should('eq', `${Cypress.config().baseUrl}/app`);
  });

  it('На странице /app присутствует навигация', () => {
    login();
    checkNav();
  });

  it('На странице /app присутствует приветствие', () => {
    login();
    cy.get('.t-greeting');
  });

  it('При переходе в инбокс показывается список отправленных писем', () => {
    login();
    cy.get('.t-link-inbox').click();
    cy.get('.t-inbox-list');
  });

  it('При переходе в инбокс url — /app/inbox', () => {
    login();
    cy.get('.t-link-inbox').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/app/inbox`);
  });

  it('При переходе в аутбокс показывается список отправленных писем', () => {
    login();
    cy.get('.t-link-outbox').click();
    cy.get('.t-outbox-list');
  });

  it('При переходе в аутбокс url — /app/outbox', () => {
    login();
    cy.get('.t-link-outbox').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/app/outbox`);
  });

  it('При переходе в письмо из аутбокса url меняется на /app/outbox/:id письма', () => {
    login();
    goToOutboxEmail()
  });

  it('В аутбокс письме есть поле to и тело письма', () => {
    login();
    goToOutboxEmail()
    cy.get('.t-mail-to')
    cy.get('.t-mail-body')
  });

  it('При переходе в письмо из инбокса url меняется на /app/inbox/:id письма', () => {
    login();
    goToInboxEmail()
  });

  it('В инбокс письме есть поле from и тело письма', () => {
    login();
    goToInboxEmail()
    cy.get('.t-mail-from')
    cy.get('.t-mail-body')
  });
});
