Feature: AddingProductsToCart

  Scenario Outline: Adding Products to cart and Validate total
    Given Open WebApplication "https://www.hollandandbarrett.com/" on browser "Chrome" 
    When Click on Rewards section 
    And Login to the application
    When Search for the Vitamins Supplements
    And Add them to the cart add "<VitaminsCount>" vitamins
    And Find the Vegan Choloates "<VeganCholatesCount>" and Added them to cart
    Then Validate all the products added to cart and Subtotal value
    
    Examples:
      | VitaminsCount | VeganCholatesCount |
      | 2        | 3              |