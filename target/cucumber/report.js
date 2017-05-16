$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/amazonSearch.feature");
formatter.feature({
  "line": 1,
  "name": "amazon search",
  "description": "",
  "id": "amazon-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2986229945,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on page \"https://www.amazon.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 14
    }
  ],
  "location": "amazonSearch.goToPage(String)"
});
formatter.result({
  "duration": 2337553430,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario search for Nikon"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "id": "amazon-search;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I search for \"Nikon\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click the Search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\"Nikon\" should be visible on search results",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "sort the results by \"Price: High to Low\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\"Price: High to Low\" should be visible on page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the number \"2\" product",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "topic should contain \"Nikon D3X\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nikon",
      "offset": 14
    }
  ],
  "location": "amazonSearch.searchProduct(String)"
});
formatter.result({
  "duration": 2137907101,
  "status": "passed"
});
formatter.match({
  "location": "amazonSearch.clickSearchButton()"
});
formatter.result({
  "duration": 3781150263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikon",
      "offset": 1
    }
  ],
  "location": "amazonSearch.assertSearchResults(String)"
});
formatter.result({
  "duration": 105716675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price: High to Low",
      "offset": 21
    }
  ],
  "location": "amazonSearch.sortPriceHighToLow(String)"
});
formatter.result({
  "duration": 791683398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price: High to Low",
      "offset": 1
    }
  ],
  "location": "amazonSearch.assertSortBy(String)"
});
formatter.result({
  "duration": 1249923984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "amazonSearch.chooseProduct(int)"
});
formatter.result({
  "duration": 4190422245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikon D3X",
      "offset": 22
    }
  ],
  "location": "amazonSearch.assertTitle(String)"
});
formatter.result({
  "duration": 495110410,
  "error_message": "java.lang.AssertionError: Assert if actual product title contians text Nikon D3X\nExpected: a string containing \"Nikon D3X\"\n     but: was \"Nikon D4S 16.2 MP CMOS FX Digital SLR with Full 1080p HD Video (Body Only)\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat AmazonSearch.amazonSearch.assertTitle(amazonSearch.java:89)\r\n\tat ✽.Then topic should contain \"Nikon D3X\"(features/amazonSearch.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 290106849,
  "status": "passed"
});
});