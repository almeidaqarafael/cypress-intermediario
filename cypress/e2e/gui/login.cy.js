describe('Login', () => {

  it('login com sucesso', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})