Feature: Account Creation Verification

  Scenario: Validation of Account Creation 
    Given Open WebApplication "https://www.hollandandbarrett.com/" on browser "Chrome" 
    When Click on Rewards section
    And Click on account and then Create account
    Then validate account creation
    
    