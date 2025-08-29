const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl:'https://restful-booker.herokuapp.com',
    requestTimeout: 6000,
    responseTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      requestMode: true,
      hideCredentials: true,
      username : process.env.CYPRESS_USERNAME,
      password : process.env.CYPRESS_PASSWORD,
      auth_url: '/auth'
    }
  },
});
