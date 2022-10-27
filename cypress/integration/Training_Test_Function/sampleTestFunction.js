import sampleTestPage from "../Training_Test_Pages/sampleTestPage";

const testPage = new sampleTestPage ();

Cypress.Commands.add('thisTestForm', (firstName, lastName, autoAnswer, qtyRange, selectDate, longMessage) => {
    testPage.firstNameInput().type(firstName, {
        force: true
    }).should ('have.value', firstName);
    
    testPage.lastNameInput().type(lastName, {
        force: true
    }).should ('have.value', lastName);
    
    testPage.genderRdo().click({
        force: true
    });
    
    testPage.optionSelect().select('Option 1');
    
    testPage.multipleOption().select('Option 3');
    
    testPage.applicapleOption().click({
        force: true
    });
    
    testPage.guessAnswer().type(autoAnswer, {
        force: true
    }).should ('have.value', autoAnswer);

    testPage.favouriteColor().should('have.attr', 'value', '#00ced1');

    testPage.selectDate().type(selectDate, {
        force: true
    });

    testPage.sendFile();

    testPage.qtyRange().type(qtyRange, {
        force: true
    }).should ('have.value', qtyRange);
    
    testPage.longMessage().clear().type(longMessage, {
        force: true
    });

    testPage.submitBtn().click({
        force: true
    });

});