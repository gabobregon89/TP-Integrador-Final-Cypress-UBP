import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const endpoint = Cypress.env(`${envi}`).customerUrl;
const account = Cypress.env(`${envi}`).accountUrl;

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


//Scenario 2: Cargando un cliente en particular

Given('El usuario realiza una peticion GET para obtener datos de un cliente en particular', () => {
    cy.request('GET', account).as('getAccountResponse');
});

Then('El usuario deberia recibir un codigo de estado OK {int}', (statusCode) => {
    cy.get('@getAccountResponse').its('status').should('eq', statusCode);
});

Then('El usuario deberia ver en la respuesta un objeto cliente con sus datos', () => {
    cy.get('@getAccountResponse').then((response) => {
        expect(response.body).to.be.an('string');
        expect(response.body.length).to.be.greaterThan(0);
    });
});