This project contains Cypress tests for a web application. The tests are organized into different files based on the functionality being tested, such as login, homepage, and textbook.

To run the tests, first install Cypress using npm. Then, navigate to the project directory and run the command "npx cypress open". This will open the Cypress test runner, where you can select which tests to run.

The tests include error handling for uncaught exceptions, which was added due to unhandled exceptions in the application that would otherwise prevent tests from running beyond the login page.

The login_data.cy.js file contains a function for logging in, which is used in multiple tests. The other files contain functions for navigating to different pages and interacting with elements on those pages.

Overall, these tests provide coverage for the login process, homepage navigation, and textbook functionality of the web application.
