import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import IniciPage from '../../../pages/globalsqa/Inicio';
import CustomerPage from '../../../pages/globalsqa/Customer';
import AccountPage from '../../../pages/globalsqa/Account'; 

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (DEV, TEST, PROD.)
const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const url = Cypress.env(`${envi}`).apiUrl;

Given('El usuario ingresa a la seccion de Customer Login', () => {
  // Visitamos la URL base de la aplicación
  cy.visit(url);
});

When('El usuario hace click en el boton con el nombre {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  IniciPage.clickCustomerLogin();
});

Then('El usuario deberia ver el select {string}', (select) => {
  // Verificamos que el select esté visible y tenga el texto esperado
  CustomerPage.elements.useSelect().should('be.visible').and('contain.text', select);
});

When('El usuario selecciona al cliente {string}', (cliente) => {
  // Seleccionamos el cliente del dropdown
  CustomerPage.selectCustomer(cliente);
});

Then('El usuario debe disponer del boton {string}', (boton) => {
  // Verificamos que el botón esté visible y tenga el texto esperado
  CustomerPage.elements.loginBtn().should('be.visible').and('contain.text', boton);
});

When('El usuario hace click en el boton Login para ingresar', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  CustomerPage.clickLogin();
});

Then('El usuario deberia ver el mensaje {string}', (mensaje) => {
    // Verificamos que el mensaje de bienvenida esté visible y tenga el texto esperado
    CustomerPage.elements.welcomeMsg().should('be.visible').and('contain.text', mensaje);
});

Then('El usuario deberia ver el boton de salida {string}', (boton) => {
    // Verificamos que el botón de logout esté visible y tenga el texto esperado
    CustomerPage.elements.logoutBtn().should('be.visible').and('contain.text', boton);
});

Then('El usuario deberia ver el boton de transacciones {string}', (boton) => {
    // Verificamos que el botón de transacciones esté visible y tenga el texto esperado
    AccountPage.elements.transBtn().should('be.visible').and('contain.text', boton);
});

Then('El usuario deberia ver el boton de depositos {string}', (boton) => {
    // Verificamos que el botón de depositar esté visible y tenga el texto esperado
    AccountPage.elements.depositBtn().should('be.visible').and('contain.text', boton);
});

Then('El usuario deberia ver el boton de billetera {string}', (boton) => {
    // Verificamos que el botón de retirar esté visible y tenga el texto esperado
    AccountPage.elements.withdrawBtn().should('be.visible').and('contain.text', boton);
});
