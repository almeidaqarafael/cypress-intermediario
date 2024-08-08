Cypress.Commands.add('login', (
  user = Cypress.env('usuario'),
  password = Cypress.env('senha')
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  login()
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