/// <reference types="cypress" />

const pass = "P@ssw0rd";
describe('Cadastro', () => {
   beforeEach(() => {
    cy.visit('https://adopet-tau.vercel.app/');
    cy.title().should('eq', 'AdoPet');
   })
    it('Cadastro realizado com sucesso', () => {
        cy.cadastroValido()
    })
});