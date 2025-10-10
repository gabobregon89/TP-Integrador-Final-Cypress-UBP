import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const endpoint = Cypress.env(`${envi}`).customerUrl;

Given('El usuario realiza una peticion GET al endpoint correspondiente', () => {
    cy.request('GET', endpoint).as('getCustomersResponse');
});

Then('El usuario deberia recibir un codigo de estado {int}', (statusCode) => {
    cy.get('@getCustomersResponse').its('status').should('eq', statusCode);
});

Then('El usuario deberia ver en la respuesta un arreglo de clientes', () => {
    cy.get('@getCustomersResponse').then((response) => {
        expect(response.body).to.include('<title>XYZ Bank</title>');
        expect(response.body).to.be.an('string');
        expect(response.body.length).to.be.greaterThan(0);
    });
});

