class sampleTestPage{
    firstNameInput(){
        return cy.get('#fname');
    }

    lastNameInput(){
        return cy.get('#lname');
    }

    genderRdo (){
        return cy.get('#male');
    }

    optionSelect () {
        return cy.xpath("//*[@id='option']")
    }

    // optionSelect1 () {
    //     return cy.xpath("//select[1]/option[contains(text(), 'Option 2')]");
    // }
    
    multipleOption () {
        return cy.xpath("//*[@id='owc']");
    }
    
    applicapleOption () {
        return cy.xpath('//input[7]');
    }

    guessAnswer () {
        return cy.xpath('//input[9]');
    }

    favouriteColor(){
        return cy.xpath("//*[@id='favcolor']");
    }

    selectDate () {
        return cy.xpath("//*[@id='day']");
    }

    roleRange(){
        return cy.xpath("//*[@id='a']");
    }
    
    sendFile(){
        return cy.get ('#myfile').attachFile('jithan.jpg');
    }

    qtyRange() {
        return cy.get ('#quantity');
    }

    longMessage() {
        return cy.xpath ('//fieldset/textarea');
    }

    submitBtn() {
        return cy.xpath("//button[contains(text(), ' Submit')]");
    }
}

export default sampleTestPage;