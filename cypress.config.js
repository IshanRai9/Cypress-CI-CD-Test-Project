
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',

    // Test file patterns
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'cypress/integration/**/*.spec.{js,jsx,ts,tsx}'
    ],

    // Support file
    supportFile: 'cypress/support/e2e.js',

    // Fixtures
    fixturesFolder: 'cypress/fixtures',

    // Node events
    setupNodeEvents(on, config) {
      // Plugins and tasks

      // Environment-based configuration
      if (config.env.testType === 'smoke') {
        config.specPattern = 'cypress/e2e/smoke/**/*.cy.js';
      } else if (config.env.testType === 'regression') {
        config.specPattern = 'cypress/e2e/regression/**/*.cy.js';
      }

      // Reporter configuration for CI
      if (config.isInteractive === false) {
        config.reporter = 'cypress-multi-reporters';
        config.reporterOptions = {
          reporterEnabled: 'mochawesome',
          mochawesomeReporterOptions: {
            reportDir: 'cypress/results',
            overwrite: false,
            html: false,
            json: true
          }
        };
      }

      // Database seeding task
      on('task', {
        seedDatabase() {
          // Mock database seeding
          console.log('🌱 Database seeded with test data');
          return null;
        },

        clearDatabase() {
          // Mock database clearing
          console.log('🧹 Database cleared');
          return null;
        },

        log(message) {
          console.log(message);
          return null;
        }
      });

      return config;
    }
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}'
  },

  env: {
    testType: 'all',
    apiUrl: 'http://localhost:3001/api',
    coverage: false
  }
});
