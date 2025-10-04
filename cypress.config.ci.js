
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: false,  // Disabled for CI performance
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',

    // Retry configuration for CI
    retries: {
      runMode: 2,
      openMode: 0
    },

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',

    setupNodeEvents(on, config) {
      // CI-specific configurations
      config.reporter = 'cypress-multi-reporters';
      config.reporterOptions = {
        reporterEnabled: 'mochawesome',
        mochawesomeReporterOptions: {
          reportDir: 'cypress/results',
          overwrite: false,
          html: true,
          json: true,
          reportFilename: '[datetime]-[name]-report'
        }
      };

      on('task', {
        log(message) {
          console.log(`[CI] ${message}`);
          return null;
        }
      });

      return config;
    }
  },

  env: {
    testType: 'regression',
    apiUrl: 'http://localhost:3001/api'
  }
});
