import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InicioPage from '../../../pages/globalsqa/Inicio.js';
import BankManager from '../../../pages/globalsqa/BankManager.js';
import AddCustomerPage from '../../../pages/globalsqa/AddCustomer.js';
import OpenAccountPage from '../../../pages/globalsqa/OpenAccount.js';

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (DEV, TEST, PROD.)
const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const url = Cypress.env(`${envi}`).apiUrl;
const elements = InicioPage.elements;

// Scenario 1
Given('El usuario ingresa a la seccion de Bank Manager Login', () => {
  // Visitamos la URL base de la aplicación
  cy.visit(url);
});

When('El usuario hace click en el boton {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  InicioPage.clickBankManagerLogin();
});

Then('El usuario deberia ver el boton1 {string}', (boton) => {
  // Verificamos que el botón esté visible y tenga el texto esperado
  BankManager.elements.addCustBtn().should('be.visible').and('contain.text', boton);
});

When('El usuario hace click en el boton agregar {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  BankManager.clickAddCustomer();
});

When('El usuario ingresa el nombre {string}', (nombre) => {
  // Ingresamos el nombre en el campo correspondiente
  AddCustomerPage.enterFirstName(nombre);
});

When('El usuario ingresa el apellido {string}', (apellido) => {
  // Ingresamos el apellido en el campo correspondiente
  AddCustomerPage.enterLastName(apellido);
});

When('El usuario ingresa el codigo postal {string}', (codigo) => {
  // Ingresamos el código postal en el campo correspondiente
  AddCustomerPage.enterPostCode(codigo);
});

When('El usuario hace click en el boton {string} para enviar el formulario', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  elements.submitBtn().should('be.visible').and('have.text', boton);
  AddCustomerPage.clickSubmit();
});

Then('Se deberian borrar los campos del formulario', () => {
  // Verificamos que los campos del formulario estén vacíos
  elements.firstNameInput().should('have.text', '');
  elements.lastNameInput().should('have.text', '');
  elements.postCodeInput().should('have.text', '');
});


// Scenario 2
Then('El usuario deberia ver el boton2 {string}', (boton) => {
    // Verificamos que el botón esté visible y tenga el texto esperado
  BankManager.elements.openAccBtn().should('be.visible').and('contain.text', boton);
});

When('El usuario hace click en el boton2 {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  BankManager.clickOpenAccount();
});

When('El usuario selecciona el cliente {string}', (cliente) => {
  // Seleccionamos el cliente del dropdown
  OpenAccountPage.elements.customerSelect().select(1).should('have.value', '1');
});

When('El usuario selecciona la moneda {string}', (moneda) => {
  // Seleccionamos la moneda del dropdown
  OpenAccountPage.elements.currencySelect().select(moneda);
});

When('El usuario hace click en el boton {string} para procesar', (boton) => {
    // Buscamos el botón por su selector y hacemos click
    OpenAccountPage.elements.processBtn().should('be.visible').and('have.text', boton);
    OpenAccountPage.clickProcess();
});

Then('Se deberian quedar con el valor por defecto en el select', () => {
    // Verificamos que el dropdown tenga el valor por defecto
    OpenAccountPage.elements.customerSelect().should('contain.text', '---Customer Name---');
    OpenAccountPage.elements.currencySelect().should('contain.text', '---Currency---');
});


// Scenario 3
Then('El usuario deberia ver el boton3 {string}', (boton) => {
  // Verificamos que el botón esté visible y tenga el texto esperado
  BankManager.elements.customersBtn().should('be.visible').and('contain.text', boton);
});

When('El usuario hace click en el boton3 {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  BankManager.clickCustomers();
});

Then('El usuario deberia ver el filtro de busqueda', () => {
  // Verificamos que tenga el filtro de busqueda
  cy.get('.form-control').should('be.visible');
});