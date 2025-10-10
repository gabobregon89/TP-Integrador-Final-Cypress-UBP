import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (DEV, TEST, PROD.)
const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const url = Cypress.env(`${envi}`).apiUrl;

Given('El usuario ingresa a la seccion de Bank Manager Login', () => {
  // Visitamos la URL base de la aplicación
  cy.visit(url);
});

When('El usuario hace click en el boton {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  cy.get(':nth-child(3) > .btn').should('be.visible').and('have.text', boton).click();
});

Then('El usuario deberia ver el boton1 {string}', (boton) => {
  // Verificamos que el botón esté visible y tenga el texto esperado
  cy.get('[ng-class="btnClass1"]').should('be.visible').and('contain.text', boton);
});

Then('El usuario deberia ver el boton2 {string}', (boton) => {
    // Verificamos que el botón esté visible y tenga el texto esperado
  cy.get('[ng-class="btnClass2"]').should('be.visible').and('contain.text', boton);
});

Then('El usuario deberia ver el boton3 {string}', (boton) => {
  // Verificamos que el botón esté visible y tenga el texto esperado
  cy.get('[ng-class="btnClass3"]').should('be.visible').and('contain.text', boton);
});

When('El usuario hace click en el boton agregar {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  cy.get('[ng-class="btnClass1"]').click();
});

When('El usuario ingresa el nombre {string}', (nombre) => {
  // Ingresamos el nombre en el campo correspondiente
  cy.get(':nth-child(1) > .form-control').type(nombre);
});

When('El usuario ingresa el apellido {string}', (apellido) => {
  // Ingresamos el apellido en el campo correspondiente
  cy.get(':nth-child(2) > .form-control').type(apellido);
});

When('El usuario ingresa el codigo postal {string}', (codigo) => {
  // Ingresamos el código postal en el campo correspondiente
  cy.get(':nth-child(3) > .form-control').type(codigo);
});

When('El usuario hace click en el boton {string} para enviar el formulario', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  cy.get('[name="myForm"] > .btn').should('be.visible').and('have.text', boton).click();
});

Then('Se deberian borrar los campos del formulario', () => {
  // Verificamos que los campos del formulario estén vacíos
  cy.get(':nth-child(1) > .form-control').should('have.text', '');
  cy.get(':nth-child(2) > .form-control').should('have.text', '');
  cy.get(':nth-child(3) > .form-control').should('have.text', '');
});

When('El usuario hace click en el boton2 {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  cy.get('[ng-class="btnClass2"]').click();
});

When('El usuario selecciona el cliente {string}', (cliente) => {
  // Seleccionamos el cliente del dropdown
  cy.get('[name="userSelect"]').select(cliente);
});

When('El usuario selecciona la moneda {string}', (moneda) => {
  // Seleccionamos la moneda del dropdown
  cy.get('[name="currency"]').select(moneda);
});

When('El usuario hace click en el boton {string} para procesar', (boton) => {
    // Buscamos el botón por su selector y hacemos click
    cy.get('[name="myForm"] > button').should('be.visible').and('have.text', boton).click();
});

Then('Se deberian quedar con el valor por defecto en el select', () => {
    // Verificamos que el dropdown tenga el valor por defecto
    cy.get('[name="userSelect"]').should('contain.text', '---Customer Name---');
    cy.get('[name="currency"]').should('contain.text', '---Currency---');
});

When('El usuario hace click en el boton3 {string}', (boton) => {
  // Buscamos el botón por su selector y hacemos click
  cy.get('[ng-class="btnClass3"]').click();
});

Then('El usuario deberia ver en la tabla el cliente {string}', (cliente) => {
  // Verificamos que la tabla contenga el cliente buscado
  cy.get('tr').should('contain.text', cliente);
});