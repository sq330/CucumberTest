package AmazonSearch; 

import org.junit.Assert;
import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.junit.matchers.JUnitMatchers;
import cucumber.api.java.en.Given; 
import cucumber.api.java.en.Then; 
import cucumber.api.java.en.When;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;



public class amazonSearch { 
	
   WebDriver driver = null; 
   
   @Before
   public void setUp()
   {
	    driver = new ChromeDriver();  //could configure webDrivers here to test the scenario with multiple browsers and browser versions
   }
   
   @Given("^I am on page \"([^\"]*)\"$") 	
   public void goToPage(String pageUrl) { 
      driver.navigate().to(pageUrl); 
   }
	
   @When("^I search for \"([^\"]*)\"$")
   public void searchProduct(String product) {
	   driver.findElement(By.id("twotabsearchtextbox")).sendKeys(product);
   }
   
   @And("^click the Search button")
   public void clickSearchButton()
   {
	   driver.findElement(By.className("nav-input")).click(); //find search button by class name
   }
   
   @Then("^\"([^\"]*)\" should be visible on search results")
   public void assertSearchResults(String product)
   {
	   //find the result text on page and assert the search text should be visible
	   String searchResultsMessage = driver.findElement(By.xpath("//a[@id='bcKwText']/span")).getText();
	   Assert.assertTrue("Assert search text are visible on results",searchResultsMessage.contains(product));
   }
   
   @And("^sort the results by \"([^\"]*)\"$")
   public void sortPriceHighToLow(String sortBy)
   {
	   //allows user to give sort method as a parameter
	   new Select(driver.findElement(By.id("sort"))).selectByVisibleText(sortBy);
   }
   
   
   @And("^I select the number \"([^\"]*)\" product")
   public void chooseProduct(int orderOfProduct)
   {
	   //Allow user to choose any product and give the number of product user wants as a parameter
	   int index= orderOfProduct-1;
	   //Wait until the wanted product link is clickable
	   WebElement product = (new WebDriverWait(driver, 10))
			   .until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='result_"+index+"']//a[@class='a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal']")));
	   product.click();
   }
   
   @Then("^\"([^\"]*)\" should be visible on page")
   public void assertSortBy(String sortBy)
   {
	   //Assert chosen sort method text should be visible on page, wait until it becomes visible
	   WebElement sortMethodOnPage = (new WebDriverWait(driver, 10))
			   .until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='centerPlus']//span[@class='a-color-base a-text-bold']")));
	   String sortMethodOnPageString = sortMethodOnPage.getText();  
	   Assert.assertEquals(sortMethodOnPageString,sortBy);
   }   
   
   @Then("^topic should contain \"([^\"]*)\"$") 
   public void assertTitle(String productName) {  
	   //Verify from product detail page, assert the product title contains a given text by user.
	   String actualTitle=driver.findElement(By.id("productTitle")).getText(); 
	   Assert.assertThat("Assert if actual product title contians text "+productName, actualTitle, JUnitMatchers.containsString(productName));     
   }
   
   @After()
   public void tearDown() //Close driver when test run finished   
   {driver.close();}
   
} 
