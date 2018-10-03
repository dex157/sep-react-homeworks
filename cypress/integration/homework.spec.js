describe('localstorage-hoc', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Поведение одной записи', () => {
    it('Создает запись с текстом в инпуте по клику на кнопку +', () => {
      cy.get('.t-input').type('Купить молоко')
      cy.get('.t-plus').click()

      cy.get('.t-todo').should('contain', 'Купить молоко')
    })

    it('Создает запись с текстом в инпуте по нажатию enter', () => {
      cy.get('.t-input').type('Купить молоко')
      cy.get('.t-input').type('{enter}')

      cy.get('.t-todo').should('contain', 'Купить молоко')
    })

    it('По клику на флаг меняет статус', () => {
      cy.get('.t-input').type('Купить молоко')
      cy.get('.t-plus').click()
      cy.get('.t-todo-complete-flag').click()

      cy.get('.t-todo-complete-flag').should('contain', 'x')
    })

    it('При двух кликах флаг записи меняется и возвращается', () => {
      cy.get('.t-input').type('Купить молоко')
      cy.get('.t-plus').click()
      cy.get('.t-todo-complete-flag').click()
      cy.get('.t-todo-complete-flag').click()

      cy.get('.t-todo-complete-flag').should('not.contain', 'x')
    })
  })

  describe('Localstorage', () => {
    it ('При перезагрузке страницы все записи сохраняются', () => {
      cy.get('.t-input').type('Купить молоко')
      cy.get('.t-plus').click()
      cy.get('.t-input').type('Купить хлеб')
      cy.get('.t-plus').click()
      cy.get('.t-input').type('Купить чай')
      cy.get('.t-plus').click()
      cy.get('.t-input').type('Купить лимон')
      cy.get('.t-plus').click()

      cy.visit('/')

      cy.get('.t-todo-list').find('.t-todo').should('have.length', 4)
    })
  })
})
