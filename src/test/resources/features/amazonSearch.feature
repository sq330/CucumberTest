Feature: amazon search  

Background:   
   Given I am on page "https://www.amazon.com"
   
#Scenario search for Nikon  
Scenario: 
   When I search for "Nikon"
   And click the Search button
   Then "Nikon" should be visible on search results
 
   And sort the results by "Price: High to Low"
   Then "Price: High to Low" should be visible on page
   
   And I select the number "2" product
   Then topic should contain "Nikon D3X"
   