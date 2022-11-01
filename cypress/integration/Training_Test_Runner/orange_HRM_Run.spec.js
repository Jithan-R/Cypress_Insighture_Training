import loginFunction from '../Training_Test_Function/loginFunction.js';
import logoutFunction from '../Training_Test_Function/logoutFunction.js'

//"baseUrl": "https://opensource-demo.orangehrmlive.com/web/index.php",
describe('Log in to the system', function() {
    // var loginPageH5;
    var correctEmail;
    var correctPassword;

    before('This will run before test', function () {
        // Base URL
        cy.visit('/');
        cy.wait(700);

        cy.fixture('loginPageData.json').then(function(loginPageData){
            this.loginPageData = loginPageData;

            correctEmail = loginPageData [0].email;
            correctPassword = loginPageData [0].password;
        });
        
    });

    it('Sucessfully Log-in', function(){
        cy.isLogin(correctEmail, correctPassword);
        cy.wait(1000);
        cy.isLogOut();
    });

    // it('Sucessfully Log-out', function(){
    //     // cy.isLogOut();
    // })
});