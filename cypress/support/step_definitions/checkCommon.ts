import { Then, Given } from "@badeball/cypress-cucumber-preprocessor"

Then("I check the next html element: {string}", (item: string) => {
  cy.get(item).should("be.exist")
})

Then("I check the next form: {string}", (name: string) => {
  cy.getForm(name).should("be.exist")
})

Then("I check the URL contain: {string}", (text: string) => {
  cy.url().should("contain", text)
})

Given("I am waiting for {string}", (alias: string) => {
  cy.wait(`@${alias}`)
})

Then("I check the next input form: {string} within: {string}", (name: string, wi: string) => {
  if (wi.trim() === "") {
    cy.getInputContainer(name).should("be.exist")
  } else {
    cy.get(wi).within(() => {
      cy.getInputContainer(name).should("be.exist")
    })
  }
})

Then("I check the {string} text in the next html element: {string}", (text: string, element: string) => {
  cy.get(element)
    .should("be.visible")
    .then((element) => {
      return element.text().trim()
    })
    .should("contain", text)
})

Then("I check the next link: {string}", (text: string) => {
  cy.get("a").contains(text).should("be.exist")
  cy.get("a").contains(text).invoke("prop", "href").should("not.be.empty")
})