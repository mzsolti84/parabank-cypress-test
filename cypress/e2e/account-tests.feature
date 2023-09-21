Feature: Account test
  Scenario: Open the index page
    Given I open the next page: "/index.htm"
    When I check the URL contain: "index"

  Scenario: Login
    Given I type in the input form: "username" within: "form" the next text: "dummyCypress84"
    Given I type in the input form: "password" within: "form" the next text: "DummyCypress84"
    Given I start an intercept to: "ACCOUNT", method: "GET", alias: "account"
    When I push the next input button: "Log In"
    When I save the account from "account" alias

  Scenario: Test the main menu
    Given I check customer ID and compare the customerID with the result of the back-end call
    Then I check the URL contain: "overview"
    Then I check the "Accounts Overview" text in the next html element: 'div[id="rightPanel"] > div > div > h1'
    Then I check the table and its heads
      | head             |
      | Account          |
      | Balance*         |
      | Available Amount |
    Then I check that the table has "min" 2 rows

  Scenario: Test the first account in the table
    Then I check the 1. account ID
    Given I open the 1. account
    When I check the first account's URL

  Scenario: Test the first account
    Then I check the "Account Details" text in the next html element: 'div > h1[class~="title"]'
    Then I check the "Account Activity" text in the next html element: 'div > h1[class~="title"]'
    Then I check "Account Details" division's table content:
      | row            |
      | Account Number |
      | Account Type   |
      | Balance        |
      | Available      |
    Then I check "Account Activity" division's table content:
      | row             |
      | Activity Period |
      | Type            |
    Then I check the next selectbox form: "month" within: ""
    Then I check the next selectbox form: "transactionType" within: ""
    And I check the next input button: "Go"

  Scenario: Test the selectboxs
    Then I check the "month" selectbox next items: "All, január, február, március, április, május, június, július, augusztus, szeptember, október, november, december"
    Then I check the "transactionType" selectbox next items: "All, Credit, Debit"

  Scenario: Log Out
    And I push the next link button: "Log Out"