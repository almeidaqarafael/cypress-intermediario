import { faker } from '@faker-js/faker'

describe('Criar Projeto', () => {
  
    beforeEach(() => {
    cy.login()
  });

  it('sucesso', () => {
    const projeto = {
      nomeProjeto: `projeto-${faker.datatype.uuid()}`,
      descricao: faker.random.words(5)
    }

    cy.gui_criarProjeto(projeto)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('operador')}/${projeto.nomeProjeto}`)
    cy.contains(projeto.nomeProjeto).should('be.visible')
    cy.contains(projeto.descricao).should('be.visible')
    
  })
});