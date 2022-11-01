import logoutPage from '../Training_Test_Pages/logoutPage';

const logout = new logoutPage();

Cypress.Commands.add('isLogOut', () => {
    // cy.wait(500);

    logout.navigatorBar().click({
        // force: true
    });
    
    logout.logoutBtn().click({
        // force: true
    });
})