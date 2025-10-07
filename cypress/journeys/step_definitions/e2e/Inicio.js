import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (DEV, TEST, PROD.)
const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const url = Cypress.env(`${envi}`).apiUrl;

Given('El usuario ingresa a la pagina de inicio', () => {
  // Visitamos la URL base de la aplicación
  cy.visit(url);
});

Then('El usuario deberia ver el titulo {string}', (titulo) => {
  // Verificamos que el título de la página sea el esperado
  cy.title().should('eq', titulo);
});

When('El usuario tiene que ver el boton {string}', (boton) => {
  // Buscamos el botón por su selector
  cy.get('.home').should('be.visible').and('have.text', boton);
});

When('El usuario dispone del boton {string}', (boton) => {
  // Buscamos el botón por su selector
  cy.get('.borderM > :nth-child(1) > .btn').should('be.visible').and('have.text', boton);
});

When('El usuario deberia ver el boton {string}', (boton) => {
  // Buscamos el botón por su selector
  cy.get(':nth-child(3) > .btn').should('be.visible').and('have.text', boton);
});