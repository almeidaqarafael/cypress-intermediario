describe('Login', () => {
  it('sucesso', () => {
    const operador = Cypress.env('operador')
    const senha = Cypress.env('senha')
    const options = { cacheSession: false }

    cy.login(operador, senha, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})