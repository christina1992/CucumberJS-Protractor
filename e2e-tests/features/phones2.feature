Feature: Search Specific Phone Alphabeticly/Newest
  As a basic user
  I should be able to add the name of the phone in the filter
  So the phone will show up second in the result list

  Scenario: Protractor and Cucumber Test
    Given I go to "http://localhost:8000/#!/phones"
    When I add "motorola" in the search field
    Then I the second phone title should be "DROID™ Pro by Motorola"
    And  I change the filter to alphabeticle
    Then the title of the second phone should be "MOTOROLA XOOM™"