import { Given, Then } from "@badeball/cypress-cucumber-preprocessor"
import { getValueByKey } from "../enum/endPoints.enum"

//const DELAY = 1000

Given("I open the next page: {string}", (url: string) => {
  cy.visit(url)
})

Given(
  "I start an intercept to: {string}, method: {string}, alias: {string}",
  (endPointPartial: string, type: string, alias: string) => {
    const matcher: string = getValueByKey(endPointPartial)
    type Method = "GET" | "POST" | "PUT"
    cy.intercept(type as Method, matcher).as(alias)
  },
)

Then(
  "I type in the input form: {string} within: {string} the next text: {string}",
  (name: string, wi: string, text: string) => {
    if (wi.trim() === "") {
      cy.getInputContainer(name).clear()
      cy.getInputContainer(name).type(text)
    } else {
      cy.get(wi).within(() => {
        cy.getInputContainer(name).clear()
        cy.getInputContainer(name).type(text)
      })
    }
  },
)

Given(
  "Clear all cookies", () => {
    cy.clearAllCookies()
  })