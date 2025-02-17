const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "6vnt33",
  e2e: {
    baseUrl: 'https://seusite.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});
