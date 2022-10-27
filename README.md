# cypress_training
This is simple cypress training

# How to Setup
1. Clone the project
3. `npm install` - Install all the dependencies
4. There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing conflicts use`npm install --force`.
5. Run `npm Cypress_Open` to execute the tests in Test Runner | Run `npx cypress run` to execute the tests in CLI


# Mocha Multi Reporters Installation 
(https://www.npmjs.com/package/cypress-multi-reporters)
(https://www.npmjs.com/package/cypress-mochawesome-reporter)

1. Install Mocha `npm npm install mocha --save-dev`
2. Install cypress-multi-reporters `npm install cypress-multi-reporters --save-dev`
3. Install mochawesome `npm install mochawesome --save-dev`
4. Install mochawesome-merge `npm install mochawesome-merge --save-dev`
5. Install mochawesome-report-generator `npm install mochawesome-report-generator --save-dev`
6. Change cypress reporter config file (support/cypress.json by default)

 `"screenshoutOnRunFailure": true,`
  `"screenshotsFolder": "cypress/reports/mochareports/assets",`
  `"reporter": "cypress-multi-reporters",`
  `"reporterOptions": {`
    `"reporterEnabled": "mochawesome",`
    `"mochawesomeReporterOptions" : {`
     `"reportPageTitle": "RGP Regression",`
      `"reportDir": "cypress/reports/mocha",`
      `"quite": true,`
      `"charts": true,`
      `"overwrite": false,`
      `"html": true,`
      `"json": true,`
      `"timestamp": "mmddyyyy_HHMMss"`
    `}`
  `}`

7. Add cypress report screenshot code (support/index.js) 

`const addContext = require('mochawesome/addContext')`

`Cypress.on("uncaught:exception", (err, runnable) => {`
`//returing false here prevents cypress from `
`//failing the test`
`return false`
`})`

`Cypress.on('test:after:run', (test, runnable) => {`
    `if (test.state === 'failed') {`
        `const screenshot = ``${runnable.parent.title} -- ${test.title} (failed).png`
        `addContext({ test }, ``assets/${Cypress.spec.name}/${screenshot}``)`
    `}`
`})`


# Xpath Installation 
(https://www.npmjs.com/package/cypress-xpath)

1. Install xpath `npm install -D cypress-xpath`
2. Then include in your project's support/index.js `require('cypress-xpath')`

# How to Run using NPM Script
1. Delete node modules using cmd `del node_modules` or NPM Script added into package.json `"delete_node_module": "del node_modules"`
2. Delete package-lock.json using cmd `del package-lock.json yarn.lock` or NPM Script added into package.json `"delete_packagelockJSON": "del package-lock.json yarn.lock"`
3. Clean node module cache using cmd `npm cache clean --force` or NPM Script added into package.json `"clean_cache": "npm cache clean --force"`
4. Reinatall node modules using cmd `npm install` or NPM Script added into package.json `"install_node_module": "npm install"`
5. Cypress open using cmd `cypress open` or NPM Script added into package.json `"cypress_open": "cypress open"`
6. Remove the reports folder if exist and create after tests NPM Script added into package.json `"clean:reports": "if exist cypress\\reports rmdir /s/q cypress\\reports && mkdir cypress\\reports && mkdir cypress\\reports\\mochareports"`
7. Clean reports NPM Script added into package.json `"pretest": "npm run clean:reports"`
8. Cypress headless run default browser using cmd `cypress run`
8. Cypress headless run chrome browser using cmd `cypress run --browser chrome` or NPM Script added into package.json `"scripts": "cypress run --browser chrome"`
9. Mocha Combine JSON reports NPM Script added into package.json `"combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json"`
10. Mocha Generate HTML report NPM Script added into package.json `"generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports"`
11. Mocha Combine JSON and HTML report NPM Script added into package.json `"posttest": "npm run combine-reports && npm run generate-report"`
12. Cypress headless run and Mocha Combine JSON & HTML report NPM Script added into package.json `"regression": "npm run scripts || npm run posttest"`
    
# MomentJS Intallation
(https://momentjs.com/)

1. Install moment `npm install moment --save`
2. Then include in your project's support/index.js `require('moment')`

# How to use Moment JS
1. Import Moment as `import moment from 'moment';`
2. Usable syntax `moment().format();`

# Running All Specs
- When you're running your tests from the Test Runner, make sure that none of the tests has `only`, as this basically tells cypress to run that particular test and skip all others.

# Running integrationFolder (at a time only one folder can run)
- cypress.json add `"integrationFolder": "cypress/integration/test_Login",`

# Running testFiles (can run any amount of test spec files)
- cypress.json add `"testFiles": ["./test_Login/TC001_Login_Logout.spec.js","./test_RegBook/TC001_RegBook_Delete_RegGroup.spec.js"]`

# Articles on Cypress
- [How to Install Cypress](https://testersdock.com/how-to-install-cypress/)
- [Understanding Cypress Folder Structure](https://testersdock.com/cypress-folder-structure/)
- [How to execute Cypress Tests using Test Runner and CLI](https://testersdock.com/cypress-test-runner-cli/)
- [Writing your First Test in Cypress](https://testersdock.com/first-cypress-test/)
- [How to use Fixtures in Cypress Tests](https://testersdock.com/cypress-fixtures/)
- [How to use readFile() and writeFile() in Cypress](https://testersdock.com/cypress-writefile-readfile/)
- [How to interact with multiple elements using each()](https://testersdock.com/cypress-each/)
- [Conditional Testing (If Else) in Cypress](https://testersdock.com/cypress-conditional-if-else-testing/)
- [How to upload a file in Cypress](https://testersdock.com/cypress-file-upload/)
- [How to download a file in Cypress](https://testersdock.com/cypress-file-download/)
- [API Testing in Cypress](https://testersdock.com/cypress-api-testing/)
- [How to chain Multiple APIs in Cypress](https://testersdock.com/cypress-chain-multiple-api/)
- [Mock API Response in Cypress using cy.server() and cy.route()](https://testersdock.com/cypress-mock-api/)
- [How to handle JS Alert, Confirm and Prompt in Cypress](https://testersdock.com/cypress-javascript-alert-confirm-prompt/)
- [How to use Skip and Only in Cypress](https://testersdock.com/skip-only-cypress/)
- [How to execute Cypress Tests in order](https://testersdock.com/cypress-execute-tests-in-order/)
- [How to handle Shadow DOM in Cypress](https://testersdock.com/cypress-shadow-dom/)
- [How to retry tests X number of times in Cypress](https://testersdock.com/test-retries-in-cypress/)
- [How to handle Iframes in Cypress](https://testersdock.com/iframes-cypress/)
- [How to generate HTML reports in Cypress](https://testersdock.com/html-reports-cypress/)
- [How to Add Tags like Smoke,E2E to Cypress Tests](https://testersdock.com/cypress-test-tags/)
- [Cypress Page Object with Locator Functions and Custom Commands](https://testersdock.com/cypress-page-object-with-locator-function-and-custom-command/)
- [Cypress Dashboard](https://testersdock.com/cypress-dashboard/)
- [How to visually generate tests with no coding in Cypress Studio](https://testersdock.com/cypress-studio/)
- [How to mock an API using cy.intercept()](https://testersdock.com/cypress-mock-api-intercept/)
- [How to integrate cypress with cucumber](https://testersdock.com/cypress-cucumber-bdd/)
- [How to hover over elements in Cypress](https://testersdock.com/cypress-hover/)

# Sample codes
https://github.com/ddawson235/salesforce-cypress-demo/tree/master/cypress
https://github.com/alapanme/Cypress-Automation
https://github.com/kristijan-pajtasev/cypress-setup
https://github.com/qaboxletstest/Cypress-Demo
https://www.youtube.com/watch?v=NfBLB329jpg


**or create a new repository on the command line**
* echo "# Data_Analysis" >> README.md
* git init
* git add README.md
* git commit -m "first commit"
* git branch -M main
* git remote add origin git@github.com:Jithan-R/Cypress_Training.git
* git push -u origin main

**…or push an existing repository from the command line**
* git remote add origin git@github.com:Jithan-R/Cypress_Training.git
* git branch -M main
* git push -u origin main
