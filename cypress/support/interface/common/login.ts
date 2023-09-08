import Chainable = Cypress.Chainable
import Response = Cypress.Response

export const silentLogin = (name: string, password: string): Chainable<Response<any>> => {
  return cy.request({
    method: "GET",
    failOnStatusCode: false,
    url: `http://parabank.parasoft.com/parabank/services/bank/login/${name}/${password}`,
   })
}
