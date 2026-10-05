Cypress.Commands.add('login', (
  operador = Cypress.env('operador'),
  senha = Cypress.env('senha'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(operador)
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
    cy.session(operador, login, options)
  } else {
    login()
  }
});

Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar').click()
  cy.contains('Sign out').click()
});

Cypress.Commands.add('gui_criarProjeto', projeto => {
  cy.visit('/projects/new')

  cy.get('#project_name').type(projeto.nome)
  cy.get('#project_description').type(projeto.descricao)
  cy.get('.qa-initialize-with-readme-checkbox').check()
  cy.contains('Create project').click()
});

Cypress.Commands.add('gui_criarIssue', issue => {
  cy.visit(`/${Cypress.env('operador')}/${issue.projeto.nome}/issues/new`)

  cy.get('#issue_title').type(issue.titulo)
  cy.get('#issue_description').type(issue.descricao)
  cy.contains('Submit issue').click()
});
