import { Given, Then } from "@badeball/cypress-cucumber-preprocessor"
import { getValueByKey } from "../enum/endPoints.enum"
import { silentLogin } from "../interface/common/login"
import { xmlProperty } from "../cypressUtil"
import IAccountResponseBody from "../interface/responseBody/account-response-body"

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

Given("Clear all cookies", () => {
  cy.clearAllCookies()
})

Then("I save the account from {string} alias", (alias: string) => {
  cy.wait(`@${alias}`)
    .its("response")
    .its("body")
    .then((bodyObject: IAccountResponseBody[]) => {
      cy.task("setGlobalAccount", bodyObject[0])
    })
})

Then("I check customer ID and compare the customerID with the result of the back-end call", () => {
  silentLogin("dummyCypress84", "DummyCypress84")
    .its("body")
    .then((response: string) => {
      const idFromLogin = xmlProperty(response, "id")
      cy.wrap(idFromLogin).should("not.be.empty")

      cy.task("getGlobalAccount").then((account: IAccountResponseBody) => {
        cy.wrap(idFromLogin).should("eq", account.customerId.toString())
      })
    })
})
