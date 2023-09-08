import { DataTable, Then } from "@badeball/cypress-cucumber-preprocessor"

Then("I check the table and its head", (table: DataTable) => {
  const tableCount = table.hashes().length
  cy.getTable("accountTable").should("be.exist").and("be.visible")
  cy.getTable("accountTable", "head")
    .find("tr")
    .within(() => {
      table.hashes().forEach((element) => {
        cy.contains("th", element.head)
      })
    })

  cy.getTable("accountTable", "head").find("tr").find("th").should("have.length", tableCount)
})

Then("I check that the table has {string} {int} rows", (sw: string, howMany: number) => {
  let count = 0
  // eslint-disable-next-line cypress/unsafe-to-chain-command
  cy.getTable("accountTable", "body")
    .find("tr")
    .each(() => {
      count++
    })
    .then(() => {
      switch (sw.toLowerCase()) {
        case "max":
          cy.wrap(count).then((num: number) => {
            expect(num).lte(howMany.valueOf(), `A táblázatban ${num} db sor található!`)
          })
          break
        case "min":
          cy.wrap(count).then((num: number) => {
            expect(num).gte(howMany.valueOf(), `A táblázatban ${num} db sor található!`)
          })
          break
      }
    })
})
