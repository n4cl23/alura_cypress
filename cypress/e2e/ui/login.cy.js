/// <reference types="cypress" />


describe('Login no site Adopet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/login');
        cy.title().should('eq', 'AdoPet');
    });
    it('Falha no login do sistema', () => {
        cy.loginInvalido();
    });

    it('Login com sucesso!', () => {
        cy.loginValido();
    });


})