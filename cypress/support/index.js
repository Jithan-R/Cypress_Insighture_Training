// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
//Xpath
require('cypress-xpath');

//Moment.js for date
// import ('moment');
// Import commands.js using ES2015 syntax:
import './commands'
// import 'cypress-real-event/support';
// import '../integration/Training_Test_Function/loginFunction.js';
// Alternatively you can use CommonJS syntax:
// require('./commands')

//Add screenshot to mochawesome report
// const addContext = require('mochawesome/addContext');

// index.js
const customCommands = require('./commands.js')

module.exports = {
  commands: customCommands
}