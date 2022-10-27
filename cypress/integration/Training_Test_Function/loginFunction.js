import loginPage from '../Training_Test_Pages/loginPage.js';

const login = new loginPage();

Cypress.Commands.add('isLogin', (email, password) => {
    // cy.wait(3000);

    login.userNameInput().type(email, {
        force: true
    }).should('have.value',email);

    login.passwordInput().type(password, {
        force: true
    }).should('have.value', password);

    login.loginBtn().click({
        force: true
        // cy.wait(3000);
    });
})