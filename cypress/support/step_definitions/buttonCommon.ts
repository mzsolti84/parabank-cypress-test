import { Then } from "@badeball/cypress-cucumber-preprocessor"

Then("I check the next input button: {string}", (text: string) => {
  cy.contains(`input[class~="button"]`, text).should("be.exist").and("be.visible")
})

Then("I push the next input button: {string}", (text: string) => {
  cy.contains(`input[class~="button"]`, text).click()
})

Then("I push the next link button: {string}", (text: string) => {
  cy.contains("a", text).click()
})