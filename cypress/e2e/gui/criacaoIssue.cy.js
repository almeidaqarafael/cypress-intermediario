import { faker } from '@faker-js/faker';

describe('Criar Issue', () => {

    const issue = {
        titulo: `issue-${faker.datatype.uuid()}`,
        descricao: faker.random.words(5),
        projeto: {
            nome: `projeto-${faker.datatype.uuid()}`,
            descricao: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.login()
        cy.gui_criarProjeto(issue.projeto)
    })

    it('sucesso', () => {
        cy.gui_criarIssue(issue)

        cy.get('.title-container').should('contain', issue.titulo)
        cy.get('.md').should('contain', issue.descricao)
    })
});