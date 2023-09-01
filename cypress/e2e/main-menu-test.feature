Feature: Main menu test
  Scenario: Open the index page
    Given I start an intercept to: "IMAGES", method: "GET", alias: "images"
    Given I open the next page: "/index.htm"
    When I am waiting for "images"
    Then I check the URL contain: "index"

  Scenario: Login
    Given I type in the input form: "username" within: "form" the next text: "dummy84"
    Given I type in the input form: "password" within: "form" the next text: "Dummy84"
    When I push the next input button: "Log In"

  Scenario: Test the main menu
    Then I check the "Account Services" text in the next html element: 'div[id="leftPanel"] > h2'
    Then I check the main menu items
      | menu                |
      | Open New Account    |
      | Accounts Overview   |
      | Transfer Funds      |
      | Bill Pay            |
      | Find Transactions   |
      | Update Contact Info |
      | Request Loan        |
      | Log Out             |