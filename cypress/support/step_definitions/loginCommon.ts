import { Then } from "@badeball/cypress-cucumber-preprocessor"
import { silentLogin } from "../interface/common/login"

Then("I check the login", () => {
  cy.wait("@login")
})

Then("I log in: {string} {string}", (username: string, password: string) => {
  silentLogin(username, password)
})
