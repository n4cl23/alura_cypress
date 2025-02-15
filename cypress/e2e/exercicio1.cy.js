/// <reference types="cypress" />

describe('Exercicio 1 cypress Alura', () => {
    it('Primeiro exercicio', () => {
        //Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
        cy.visit('https://adopet-tau.vercel.app/');
        //Visite a página de principal do AdoPet e teste os botões header;
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
        //Visite a página de /login do Adopet;
        cy.visit('https://adopet-tau.vercel.app/login');
        cy.url().should('eq', 'https://adopet-tau.vercel.app/login');
    })

    it('Visite a página de /home do Adopet;', () => {
        //Visite a página de /home do Adopet;
        cy.visit('https://adopet-tau.vercel.app/home').url().should('eq', 'https://adopet-tau.vercel.app/home');
        //Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
        cy.contains('.card h4', 'Sirius') // Encontra o card pelo nome
            .parents('.card') // Sobe para o elemento pai (o próprio card)
            .find('.card__contact') // Busca o botão dentro desse card
            .click(); // Clica no botão

    })
});



