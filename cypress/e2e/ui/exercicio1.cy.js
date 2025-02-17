/// <reference types="cypress" />

describe('Exercicio 1 cypress Alura', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app');
        cy.title().should('eq', 'AdoPet');
        cy.get('p').contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    })
    it('Primeiro exercicio', () => {
        cy.get('.header__home')
            .should('be.visible')
            .click();
        cy.title()
            .should('eq', 'AdoPet');
        cy.get('.header__message')
            .should('be.visible')
            .click();
        cy.url().should('eq', 'https://adopet-tau.vercel.app/login');
    });

    it('Visite a página de /login do Adopet;', () => {
        cy.get('a[href="/login"]').click();
        cy.url().should('eq', 'https://adopet-tau.vercel.app/login');
    });

    it('Visite a página de /home do Adopet;', () => {
        cy.get('a[href="/home"]').click();
        cy.contains('.card h4', 'Sirius') 
            .parents('.card') 
            .find('.card__contact') 
            .click(); 
    })
});



