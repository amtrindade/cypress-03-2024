const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao',
  },
});
