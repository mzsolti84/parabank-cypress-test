import { Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor"
import IAccountResponseBody from "../interface/responseBody/account-response-body"
import { makeArrayFromString, makeStringArrayFromHTMLElements } from "../cypressUtil"

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

Then("I check the next selectbox form: {string} within: {string}", (name: string, wi: string) => {
  if (wi.trim() === "") {
    cy.getSelectBoxContainer(name).should("be.exist")
  } else {
    cy.get(wi).within(() => {
      cy.getSelectBoxContainer(name).should("be.exist")
    })
  }
})

Then("I check the {string} text in the next html element: {string}", (text: string, element: string) => {
  cy.get(element)
    .should("be.visible")
    .then((element): string => {
      return element.text().trim()
    })
    .should("contain", text)
})

Then("I check the next link: {string}", (text: string) => {
  cy.get("a").contains(text).should("be.exist")
  cy.get("a").contains(text).invoke("prop", "href").should("not.be.empty")
})

Then("I check the main menu items", (table: DataTable) => {
  const tableCount = table.hashes().length

  cy.get(`div[id="leftPanel"]`)
    .find("ul")
    .within(() => {
      table.hashes().forEach((item) => {
        cy.contains("li", item.menu).as("menuItem")
        cy.get("@menuItem").find("a").invoke("prop", "href").should("not.be.empty")
      })
    })

  cy.get(`div[id="leftPanel"]`).find("ul").find("li").should("have.length", tableCount)
})

Then("I check the {int}. account ID", (n: number) => {
  cy.task("getGlobalAccount").then((account: IAccountResponseBody) => {
    cy.getTable("accountTable", "body")
      .find("tr")
      .eq(n - 1)
      .find("td:first")
      .then((data: JQuery<HTMLElement>): string => {
        return data.text().trim()
      })
      .should("eq", account.id.toString())
  })
})

Then("I check the first account's URL", () => {
  cy.task("getGlobalAccount").then((account: IAccountResponseBody) => {
    cy.url().should("include", "activity.htm?id=" + account.id.toString())
  })
})

Given("I check the {string} selectbox next items: {string}", (name: string, items: string) => {
  const vItems: Array<string> = makeArrayFromString(items)
  cy.getSelectBoxContainer(name)
    .find("option")
    .then((elements) => {
      expect(makeStringArrayFromHTMLElements(elements)).to.have.members(vItems)
    })
})