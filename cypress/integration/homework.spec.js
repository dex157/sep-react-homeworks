it('Приложение запущено', () => {
  cy.visit('/');
});

describe('Интеграционные тесты', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Валидация пустых полей', () => {
    it('Показывает ошибку имени, если его нет', () => {
      cy.get('.t-submit').click();

      cy.get('.t-error-firstname').should('contain', 'Нужно указать имя');
    });

    it('Показывает ошибку фамилии, если ее нет', () => {
      cy.get('.t-submit').click();

      cy.get('.t-error-lastname').should('contain', 'Нужно указать фамилию');
    });

    it('Показывает ошибку пароля, если его нет', () => {
      cy.get('.t-submit').click();

      cy.get('.t-error-password').should('contain', 'Нужно указать пароль');
    });
  });

  describe('Валидация полей с ошибками', () => {
    it('Показывает ошибку имени, если оно введено не верно', () => {
      cy.get('.t-input-firstname').type('неправильное имя');
      cy.get('.t-submit').click();

      cy.get('.t-error-firstname').should('contain', 'Имя указано не верно');
    });

    it('Показывает ошибку фамилии, если она введена не верно', () => {
      cy.get('.t-input-lastname').type('неправильная фамилия');
      cy.get('.t-submit').click();

      cy.get('.t-error-lastname').should('contain', 'Фамилия указана не верно');
    });

    it('Показывает ошибку фамилии, если она введена не верно', () => {
      cy.get('.t-input-password').type('неправильный пароль');
      cy.get('.t-submit').click();

      cy.get('.t-error-password').should('contain', 'Пароль указан не верно');
    });
  });

  describe('Поведение ошибок', () => {
    it('Скрыть ошибки, если начался ввод в одно из полей', () => {
      cy.get('.t-submit').click();

      cy.get('.t-input-password').type('случайная надпись');

      cy.get('.t-error-firstname').should('be.empty');
      cy.get('.t-error-lastname').should('be.empty');
      cy.get('.t-error-password').should('be.empty');
    });
  });
  describe('Валидация правильной формы', () => {
    it('Показывает одобрение Бонда, если все верно', () => {
      cy.get('.t-input-firstname').type('james');
      cy.get('.t-input-lastname').type('bond');
      cy.get('.t-input-password').type('007');
      cy.get('.t-submit').click();

      cy.get('.t-bond-image');
    });
  });
});
