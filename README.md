# cypress_training
* This is simple cypress training

# How to Setup
* Clone the project
* `npm install` - Install all the dependencies
* There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing conflicts use`npm install --force`.
* Run `npm Cypress_Open` to execute the tests in Test Runner | Run `npx cypress run` to execute the tests in CLI


# Mocha Multi Reporters Installation 
(https://www.npmjs.com/package/cypress-multi-reporters)
(https://www.npmjs.com/package/cypress-mochawesome-reporter)

* Install Mocha `npm npm install mocha --save-dev`
* Install cypress-multi-reporters `npm install cypress-multi-reporters --save-dev`
* Install mochawesome `npm install mochawesome --save-dev`
* Install mochawesome-merge `npm install mochawesome-merge --save-dev`
* Install mochawesome-report-generator `npm install mochawesome-report-generator --save-dev`
* Change cypress reporter config file (support/cypress.json by default)

"screenshoutOnRunFailure": true,
    "watchForFileChange": true,
    "reporter" : "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": true,
      "json": true,
      "reportDir": "cypress/reports",
      "timestamp": "mm_dd-HH_MM_ss",
      "reportFilename": "2022"
    },

* Add cypress report screenshot code (support/index.js) 

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

* Running particular files
"testFiles": [
 "./API_Test/apiPositiveResponse.js",
 "./API_Test/apiNegativeResponse.js"
]

* Test Retries
"retries": {
  "runMode": 1,
  "openMode" : 2
}

* Save Mocha reporter
npx cypress run --reporter mochawesome

# Xpath Installation 

* Install xpath `npm install -D cypress-xpath`
* Then include in your project's support/index.js `require('cypress-xpath')`

# How to Run using NPM Script
* Delete node modules using cmd `del node_modules` or NPM Script added into package.json `"delete_node_module": "del node_modules"`
* Delete package-lock.json using cmd `del package-lock.json yarn.lock` or NPM Script added into package.json `"delete_packagelockJSON": "del package-lock.json yarn.lock"`
* Clean node module cache using cmd `npm cache clean --force` or NPM Script added into package.json `"clean_cache": "npm cache clean --force"`
* Reinatall node modules using cmd `npm install` or NPM Script added into package.json `"install_node_module": "npm install"`
* Cypress open using cmd `cypress open` or NPM Script added into package.json `"cypress_open": "cypress open"`
* Remove the reports folder if exist and create after tests NPM Script added into package.json `"clean:reports": "if exist cypress\\reports rmdir /s/q cypress\\reports && mkdir cypress\\reports && mkdir cypress\\reports\\mochareports"`
* Clean reports NPM Script added into package.json `"pretest": "npm run clean:reports"`
* Cypress headless run default browser using cmd `cypress run`
* Cypress headless run chrome browser using cmd `cypress run --browser chrome` or NPM Script added into package.json `"scripts": "cypress run --browser chrome"`
* Mocha Combine JSON reports NPM Script added into package.json `"combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json"`
* Mocha Generate HTML report NPM Script added into package.json `"generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports"`
* Mocha Combine JSON and HTML report NPM Script added into package.json `"posttest": "npm run combine-reports && npm run generate-report"`
* Cypress headless run and Mocha Combine JSON & HTML report NPM Script added into package.json `"regression": "npm run scripts || npm run posttest"`
    
# MomentJS Intallation
* Install moment `npm install moment --save`
* Then include in your project's support/index.js `require('moment')`

# How to use Moment JS
* Import Moment as `import moment from 'moment';`
* Usable syntax `moment().format();`

# Running All Specs
- When you're running your tests from the Test Runner, make sure that none of the tests has `only`, as this basically tells cypress to run that particular test and skip all others.

# Running integrationFolder (at a time only one folder can run)
- cypress.json add `"integrationFolder": "cypress/integration/test_Login",`

# Running testFiles (can run any amount of test spec files)
- cypress.json add `"testFiles": ["./test_Login/TC001_Login_Logout.spec.js","./test_RegBook/TC001_RegBook_Delete_RegGroup.spec.js"]`

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
