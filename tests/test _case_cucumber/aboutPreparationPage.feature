Feature: Verify the About page
  Background: 
    Given Visit main page site
    When Go to the Instruction page
    And Go to the About page

  # Scenario: Check the visibility breadcrumbs block on the About page
  #   Then Check the block breadcrumbs' visibility

  # Scenario: Check the visibility title string on the About page  
  #   Then Check the title page line

  # Scenario: Check the visibility image block on the About page  
  #   Then Check the visibility of the image block

  # Scenario: Check the visibility drug content detail block on the About page
  #   Then Check the visibility of the drug content detail block

  Scenario: Check the visibility price line on the drug content detail block on the About page
    Then Check the price line
  