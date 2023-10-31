Feature: Verify the Instructions page
  Background: 
    Given Visit main page site
    When Go to the Instruction page

  Scenario: Check the visibility breadcrumbs block on the Instructions page
    Then Check the block breadcrumbs' visibility

  Scenario: Check the visibility title string on the Instructions page  
    Then Check the title page line

  Scenario: Check the visibility image block on the Instructions page  
    Then Check the image block
    
  @smoke @visibility
  Scenario: Check the block release form
    Then Check the block release form visibility
    And Check the block header of the release form
    And Check the release form of the manufacturer's drug
    And Check the name of the drug in the final form
    And Check the release form of the active ingredient
    And Check the price line of the release form drug
    And Check the button of the release form block

  Scenario: Check the block characteristics
    Then Check the visibility of the characteristics block
    And Check the title of the characteristics block
    And Check the release category of the characteristics block
    And Check the active substance of the characteristics block
    And Check the medicines of the characteristics block
    And Check the release forms for NFC Element 1 of the characteristics block
    And Check the release forms for NFC Element 2 of the characteristics block
    And Check the release forms for NFC Element 3 of the characteristics block

  Scenario: Check the visibility composition and application block
    Then Check the block composition and application visibility

  Scenario: Check the visibility composition and form of the issue block
    Then Check the block composition and form of the issue visibility

  Scenario: Check the visibility comments list block
    Then Check the block comments list visibility
