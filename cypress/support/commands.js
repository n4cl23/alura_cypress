import { faker } from "@faker-js/faker";

Cypress.Commands.add('cadastroValido', () => {
    const email = faker.internet.email()
    const pass = 'P@ssw0rd'

    cy.get('a[href="/cadastro"]').click();
    cy.url().should('eq', 'https://adopet-tau.vercel.app/cadastro');
    cy.get('#name').type('alonso');
    cy.get('#email').type(email);
    cy.get('#pass-create').type(pass);
    cy.get('#pass-confirm').type(pass);
    cy.get('button').contains('Cadastrar').click();


    cy.url().should('eq', 'https://adopet-tau.vercel.app/login');
});

Cypress.Commands.add('loginInvalido', () => {
    cy.get('#email').type('janderson_santosymail.com')
        .blur()
        .invoke('prop', 'validationMessage')
        .should('contain', 'Inclua um "@" no endereço de e-mail');
    cy.get('#pass')
        .type('5234')
        .blur();
    cy.get('.error')
        .contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres')
        .should('be.visible');
    cy.get('button')
        .contains('Entrar')
        .click();
});

Cypress.Commands.add('loginValido', () => {
    // Intercepta a requisição de login
    cy.intercept('POST', '/api/login').as('loginRequest');


    const email = "admin@email.com";
    const pass = "12345aA";
    cy.get('#email').type(email);
    cy.get('#pass').type(pass);
    cy.get('button')
        .contains('Entrar')
        .click();
        cy.wait('@loginRequest').then((interception) => {
            // Exiba os dados da requisição interceptada
            cy.log('Request body:', interception.request.body);
            cy.log('Request headers:', interception.request.headers);
            cy.log('Response status:', interception.response.statusCode);
            cy.log('Response body:', interception.response.body);
          });
});