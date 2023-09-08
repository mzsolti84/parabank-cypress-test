Feature: Account test
  Scenario: Open the index page
    Given I open the next page: "/index.htm"
    When I check the URL contain: "index"

  Scenario: Login
    Given I type in the input form: "username" within: "form" the next text: "dummyCy84"
    Given I type in the input form: "password" within: "form" the next text: "DummyCy84"
    Given I start an intercept to: "ACCOUNT", method: "GET", alias: "account"
    When I push the next input button: "Log In"
    When I save the accountID from "account" alias

  Scenario: Test the main menu
    Given I check customer ID and compare the customerID with the result of the back-end call
    Then I check the URL contain: "overview"
    Then I check the "Accounts Overview" text in the next html element: 'div[id="rightPanel"] > div > div > h1'
    Then I check the table and its head
      | head             |
      | Account          |
      | Balance*         |
      | Available Amount |
    Then I check that the table has "min" 2 rows


  Scenario: Log Out
    And I push the next link button: "Log Out"