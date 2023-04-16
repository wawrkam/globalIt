const { defineConfig } = require("cypress");

module.exports = defineConfig({
  onUncaughtException: false,

  e2e: {
  viewportWidth: 1920,
  viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
