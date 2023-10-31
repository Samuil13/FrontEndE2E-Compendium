import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'tests/fixtures',
  screenshotsFolder: 'reports/ui/screenshots',
  videosFolder: 'reports/ui/videos',
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  video: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/ui',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./tests/plugins/index.js')(on, config)
    },
    specPattern: 'tests/**/*.{feature,features}',
    supportFile: 'tests/support/index.js',
  },
})
