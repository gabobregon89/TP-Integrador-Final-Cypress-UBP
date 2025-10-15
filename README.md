# Proyecto de Automatizacion con Cypress

Este repositorio contiene configuracion y casos de prueba automatizados usando la herramienta de Cypress

# Requisitos previos

Asegurate de tener instalados:

* Node.js
* npm
* Git
* Visual Studio Code (ó algun IDE de tu preferencia)

# Instalacion

* Crear una carpeta base en tu máquina
* Clonar el repo del proyecto: git clone https://github.com/gabobregon89/TP-Integrador-Final-Cypress-UBP.git
* Moverte dentro del proyecto con: cd TP-Integrador-Final-Cypress-UBP
* Instalar las dependencias del proyecto con: npm install
* Esto instalará:
    cypress
    @badeball/cypress-cucumber-preprocessor
    @bahmutov/cypress-esbuild-preprocessor
    cucumber-html-reporter
    mochawesome
    faker

# Ejecucion

## UI
* Para la ejecución de todos los test en CHROME: cy:open:e2e:dev:chrome
* Para la ejecución de todos los test en EDGE: cy:open:e2e:dev:edge

## API
* Para la ejecución de los API test: cy:open:api:dev:chrome
