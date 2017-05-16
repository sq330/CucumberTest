package AmazonSearch; 

import org.junit.runner.RunWith; 
import cucumber.api.junit.Cucumber; 
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class) 
@CucumberOptions(format = {"pretty", "html:target/cucumber"},
		
features = { "classpath:features/amazonSearch.feature"})

public class runTest { }
