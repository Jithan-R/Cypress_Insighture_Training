class logoutPage{
    navigatorBar(){
        return cy.xpath('//header/div[1]/div[2]/ul/li');
    }

    logoutBtn(){
        return cy.xpath("//a[contains(text(), 'Logout')]");
    }
}

export default logoutPage;