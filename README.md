# Title: Playwright tests for Amazon functionality

## Description:

This repository contains automated Playwright test scripts designed to verify core functionalities of the Amazon website, including:

*   User login
*   Search Functionality
*   Product Checkout
*   Wishlist Functionality

## Key features:

*   Cross-browser compatibility: Tests run seamlessly on Chromium, Firefox, and WebKit engines.

*   Detailed assertions: Assertions ensure expected behavior for each test case.


## Step for installation of Playwright through npm

Open the terminal and run the command

```npm init playwright@latest```

  
## Running test files

This command will run all test files

 ```npx playwright test``` 

  
### Running a single test file

This command will run a single test file in the folder

``` npx playwright test \<File name> ``` 


### Running file in headed mode

This command will run the test in headed mode

``` npx playwright test \<File name>  --headed``` 

  
### Running test file in single browser and headed mode

  
This command will run test in single browser in headed mode

``` npx playwright test\<File name>  -- project<Browser name>  --headed``` 

eg.

``` npx playwright test\<File name>  -- project Chromium  --headed``` 

  
### Running test file in UI Mode

This command will run your tests with [UI Mode](https://playwright.dev/docs/test-ui-mode) for a better developer experience with time travel debugging, watch mode and more.

``` npx playwright test --ui``` 



## HTML Test Reports

This command will show you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. You can click on each test and explore the test's errors as well as each step of the test. By default, the HTML report is opened automatically if some of the tests failed.

``` npx playwright test show-report``` 


## Note 

To run the code locally you need to enter you email/ phone number and password at line no 9 and 15 resp. of test file
