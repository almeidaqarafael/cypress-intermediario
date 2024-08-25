Cypress.Commands.add('login', (
  usuario = Cypress.env('usuario'),
  senha = Cypress.env('senha'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(usuario)
    cy.get("[data-qa-selector='password_field']").type(senha, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
  }

  const options = {
    cacheAcrossSpecs: true,
    validate,
  }

  if (cacheSession) {
    cy.session(usuario, login, options)
  } else {
    login()
  }
})

Cypress.Commands.add('logout', () => {
  
  cy.get('.qa-user-avatar').click()
  cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_criarProjeto', projeto => {
  cy.visit('/projects/new')

  cy.get('#project_name').type(projeto.name)
  cy.get('#project_description').type(projeto.description)
  cy.get('.qa-initialize-with-readme-checkbox').check()
  cy.contains('Create project').click()
})