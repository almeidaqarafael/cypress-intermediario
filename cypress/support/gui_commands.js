
Cypress.Commands.add('login', (
  operador = Cypress.env('operador'),
  senha = Cypress.env('senha'),
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(operador)
    cy.get("[data-qa-selector='password_field']").type(senha, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  login();
});
