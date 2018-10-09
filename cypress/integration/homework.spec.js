describe('Поведение приложения', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Если не выбран сериал, пристствует надписть 'Шоу не выбрано'", () => {
    cy.get('.t-show-info').should('contain', 'Шоу не выбрано');
  });

  it('После загрузки house, информация с шоу', () => {
    cy.get('.t-radio-input-house').click();

    cy.get('.t-show-name').should('contain', 'House');
    cy.get('.t-show-genre').should('contain', 'Жанр: Drama, Mystery, Medical');
    cy.get('.t-show-summary').should(
      'contain',
      "Sink your teeth into meaty drama and intrigue with House, FOX's take on mystery, where the villain is a medical malady and the hero is an irreverent, controversial doctor who trusts no one, least of all his patients."
    );
  });

  it('После загрузки Santa Barbara, информация с шоу', () => {
    cy.get('.t-radio-input-santaBarbara').click();

    cy.get('.t-show-name').should('contain', 'Santa Barbara');
    cy.get('.t-show-genre').should('contain', 'Жанр: Drama');
    cy.get('.t-show-summary').should(
      'contain',
      'The show focused on the wealthy and powerful Capwells in Santa Barbara. Scandals, sex, affairs, murder and romance was just a few ingredienses to describe the saucy lifestyle in town.'
    );
  });

  it('После загрузки The Big Bang Theory, информация с шоу', () => {
    cy.get('.t-radio-input-bigBang').click();

    cy.get('.t-show-name').should('contain', 'The Big Bang Theory');
    cy.get('.t-show-genre').should('contain', 'Жанр: Comedy');
    cy.get('.t-show-summary').should(
      'contain',
      `The Big Bang Theory is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard's roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.`
    );
  });
  it('Если нажать несколько раз разные иконки шоу, каждй раз информация будет загружаться об этом шоу', () => {
    cy.get('.t-radio-input-bigBang').click();
    cy.get('.t-show-name').should('contain', 'The Big Bang Theory');
    cy.get('.t-radio-input-santaBarbara').click();
    cy.get('.t-show-name').should('contain', 'Santa Barbara');
    cy.get('.t-radio-input-house').click();
    cy.get('.t-show-name').should('contain', 'House');
    cy.get('.t-radio-input-bigBang').click();
    cy.get('.t-show-name').should('contain', 'The Big Bang Theory');
    cy.get('.t-radio-input-santaBarbara').click();
    cy.get('.t-show-name').should('contain', 'Santa Barbara');
    cy.get('.t-radio-input-santaBarbara').click();
    cy.get('.t-show-name').should('contain', 'Santa Barbara');
    cy.get('.t-radio-input-bigBang').click();
    cy.get('.t-show-name').should('contain', 'The Big Bang Theory');
    cy.get('.t-radio-input-house').click();
    cy.get('.t-show-name').should('contain', 'House');
    cy.get('.t-radio-input-santaBarbara').click();
    cy.get('.t-show-name').should('contain', 'Santa Barbara');
    cy.get('.t-radio-input-bigBang').click();
    cy.get('.t-show-name').should('contain', 'The Big Bang Theory');
  });
});
