const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seusite.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
