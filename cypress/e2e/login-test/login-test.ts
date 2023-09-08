import { Before } from "@badeball/cypress-cucumber-preprocessor"

import "../../support/step_definitions/loginCommon"
import "../../support/step_definitions/common"
import "../../support/step_definitions/checkCommon"
import "../../support/step_definitions/buttonCommon"
import { silentLogin } from "../../support/interface/common/login"

Before(() => {
  cy.getAllCookies()
})

before(() => {
    silentLogin("dummyCy84", "DummyCy84").its("body").then((response: string) => {
      if (response == "Invalid username and/or password") 
        throw new Error("You probably don't sign up before you run the test! Read the README.md file!")
    })
})
