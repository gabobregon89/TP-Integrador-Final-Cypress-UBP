import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InicioPage from '../../../pages/globalsqa/Inicio.js';

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (DEV, TEST, PROD.)
const envi = Cypress.env('ENV');
// Obtenemos la URL a usar de la aplicación según el entorno
const url = Cypress.env(`${envi}`).apiUrl;

const elements = InicioPage.elements;

Given('El usuario ingresa a la pagina de inicio', () => {
  // Visitamos la URL elegida de la aplicación
  cy.visit(url);
});

Then('El usuario deberia ver el titulo {string}', (titulo) => {
  // Verificamos que el título de la página sea el esperado
  cy.title().should('eq', titulo);
});

When('El usuario tiene que ver el boton {string}', (boton) => {
  // Buscamos el botón por su selector
  elements.homeBtn().should('be.visible').and('have.text', boton);
});

When('El usuario dispone del boton {string}', (boton) => {
  // Buscamos el botón por su selector
  elements.custLogBtn().should('be.visible').and('have.text', boton);
});

When('El usuario deberia ver el boton {string}', (boton) => {
  // Buscamos el botón por su selector
  elements.bankManBtn().should('be.visible').and('have.text', boton);
});