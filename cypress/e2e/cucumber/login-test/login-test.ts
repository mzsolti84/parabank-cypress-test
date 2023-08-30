import { After, Before } from "@badeball/cypress-cucumber-preprocessor"

import "../../../support/step_definitions/loginCommon"
import "../../../support/step_definitions/common"
import "../../../support/step_definitions/checkCommon"
import "../../../support/step_definitions/buttonCommon"


Before(() => {
    cy.restoreLocalStorage()
})

After(() => {
    cy.saveLocalStorage()
})
