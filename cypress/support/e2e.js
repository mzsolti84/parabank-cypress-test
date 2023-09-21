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

// Import commands.js using ES2015 syntax:
import "./commands"
import "@shelex/cypress-allure-plugin"

const DELAY_DEFAULT = 500

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("clickOut", function () {
  return cy.get("body").click(0, 0) //0,0 here are the x and y coordinates
})

Cypress.Commands.add("getButton", (buttonName) => {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  return cy.get("button").wait(DELAY_DEFAULT).contains(buttonName)
})

Cypress.Commands.add("getInputContainer", (name) => {
  return cy.get(`input[name="${name}"]`)
})

Cypress.Commands.add("getSelectBoxContainer", (name) => {
  return cy.get(`select[name="${name}"]`)
})

Cypress.Commands.add("getForm", (name) => {
  return cy.get(`form[name~="${name}"]`)
})

Cypress.Commands.add("getTable", (id, headOrBody) => {
  const tableSelector = id ? `table[id="${id}"]` : "table"

  if (headOrBody) {
    const hOrB = headOrBody === "head" ? "thead" : "tbody"
    return cy.get(tableSelector).find(hOrB)
  }

  return cy.get(tableSelector)
})