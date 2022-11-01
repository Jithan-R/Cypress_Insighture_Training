class loginPage{
    userNameInput(){
        return cy.xpath('//div[1]/div/div[2]/input');
    }

    passwordInput(){
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }
//div[2]/div/div[2]/input
    loginBtn (){
        return cy.get('.oxd-button');
    }
}

export default loginPage;