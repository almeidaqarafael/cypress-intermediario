describe('Login', () => {
  it('login com sucesso', () => {
    const usuario = Cypress.env('usuario')
    const senha = Cypress.env('senha')
    const options = { cacheSession: false }

    cy.login(usuario, senha, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
