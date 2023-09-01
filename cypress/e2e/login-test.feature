Feature: Login test
  Scenario: Open the index page
    Given I start an intercept to: "IMAGES", method: "GET", alias: "images"
    Given I open the next page: "/index.htm"
    When I am waiting for "images"
    Then I check the URL contain: "index"

  Scenario: Check the login form
    Then I check the next form: "login"
    Then I check the "Customer Login" text in the next html element: 'div[id="leftPanel"] > h2'
    Then I check the next input form: "username" within: "form"
    Then I check the next input form: "password" within: "form"
    Then I check the "Username" text in the next html element: "form > p > b"
    Then I check the "Password" text in the next html element: "form > p > b"
    Then I check the next input button: "Log In"

  Scenario: Check the links
    Then I check the next link: "Forgot login info?"
    Then I check the next link: "Register"

  Rule: Try to Login
    Scenario: Login (succsess)
      Given I type in the input form: "username" within: "form" the next text: "dummy84"
      Given I type in the input form: "password" within: "form" the next text: "Dummy84"
      When I push the next input button: "Log In"
      Then I check the URL contain: "/overview"
      And I push the next link button: "Log Out"

    Scenario: Login (fail)
      Given Clear all cookies
      Given I open the next page: "/index.htm"
      Given I type in the input form: "username" within: "form" the next text: "dummy"
      Given I type in the input form: "password" within: "form" the next text: "BlueBarry"
      When I push the next input button: "Log In"
      Then I check the "Error!" text in the next html element: 'div[id="rightPanel"] > h1'
      And I check the "The username and password could not be verified." text in the next html element: 'div[id="rightPanel"] > p'
