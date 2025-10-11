const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

var currentDate = new Date();
var formattedDate = ("0" + currentDate.getDate()).slice(-2) + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getFullYear();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: "cypress/journeys/features/*/*.feature",
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: true,
    html: true,
    json: false,
    reportFilename: 'report-day-' + formattedDate,
    reportpageTitle: 'Reporte de Automatización'
  }
});
