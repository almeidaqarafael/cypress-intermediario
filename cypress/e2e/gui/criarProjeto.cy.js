import { faker } from '@faker-js/faker'

describe('Criar Projeto', () => {

  beforeEach(() => {
    cy.login()
  })

  it('sucesso', () => {
    const projeto = {
      name: `projeto-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_criarProjeto(projeto)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('usuario')}/${projeto.name}`)
    cy.contains(projeto.name).should('be.visible')
    cy.contains(projeto.description).should('be.visible')
  })
})
