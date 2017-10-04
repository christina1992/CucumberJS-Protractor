#test.feature
Feature: Phone Specifications
  As a basic user
  He/She should see the correct data in the
  specifications on each individual phone

  Scenario: Protractor and Cucumber Test
    Given user goes to "http://localhost:8000/#!/phones"
    When user adds "samsung" in the search field
    And user selects the phone with title "Samsung Showcase™ a Galaxy S™ phone"
    Then user sees that the qualifications for that phone are the following
      | Spec             | Value       |
      | Internal Storage | 2048MB      |
      | RAM              | 512MB       |
      | UI               | TouchWiz    |
      | OS Version       | Android 2.1 |