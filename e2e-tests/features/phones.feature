Feature: Search Specific Phone
  As a basic user
  I should be able to add the name of the phone in the filter
  So the phone will show up as only result in the result list

  Scenario: Protractor and Cucumber Test
    Given I go to "http://localhost:8000/#!/phones"
    When I add "nexus" in the search field
    Then I should see my phone in the list