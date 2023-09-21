// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Chainable = Cypress.Chainable
import "cypress-localstorage-commands"
import "@testing-library/cypress/add-commands"
import "./slowDown"



export {}
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      getButton(buttonName: string): Chainable<Element>
      getInputContainer(name: string): Chainable<Element>
      getSelectBoxContainer(name: string): Chainable<Element>
      clickOut(): Chainable<Element>
      getForm(name: string): Chainable<Element>
      getTable(id?: string, headOrBody?: string): Chainable<Element>
    }
  }
}
