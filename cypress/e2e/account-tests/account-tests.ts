import { After, Before } from "@badeball/cypress-cucumber-preprocessor"

import "../../support/step_definitions/loginCommon"
import "../../support/step_definitions/common"
import "../../support/step_definitions/checkCommon"
import "../../support/step_definitions/buttonCommon"
import { silentLogin } from "../../support/interface/common/login"

let savedCookies: Array<any> = [{}]

before(() => {
  silentLogin("dummyCypress84", "DummyCypress84")
    .its("body")
    .then((response: string) => {
      if (response == "Invalid username and/or password")
        throw new Error("You probably don't sign up before you run the test! Read the README.md file first!")
    })
})

Before(() => {
  if (savedCookies.length > 0 && savedCookies[0].name !== undefined) {
    cy.clearCookies()
    savedCookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        path: cookie.path,
        secure: cookie.secure,
        httpOnly: cookie.httpOnly,
        expiry: cookie.expires,
      })
    })
  }
})

After(() => {
  // Save cookies
  cy.getCookies().then((cookies) => {
    savedCookies = cookies
  })
})
