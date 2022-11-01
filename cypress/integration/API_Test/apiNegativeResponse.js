/// <reference types = "cypress" />
/* 
    Senarios checked :
        => POST Method :- Trying to validate POST method 405
        => DELETE Method :- Trying to validate DELETE method 405
        => GET : Validate university name not to Undefine
        => API Header :- Negative validation for Wrong Access Control
        => API Header :- Negative validation for Wrong connection
        => API Header :- Negative validation for Wrong Content Length
        => API Header :- Negative validation for Wrong Content Type
        => API Header :- Negative validation for Wrong Server
        => Status Code :- Validating wrong status code
        => GET - Validating undefine data
        => GET - Validating not equal data
        => GET - Validating not contain
        => GET - Validating not contain
*/

describe('Negative API Test', function () {
    let uniCountry;
    let statusCode, uniDomain, uniCountryCode, uniWebURL, selectedCountry, uniProvince, uniName;
    let HeaderAccessControl, headerConnection, headerContentLength, headerContentType, headerServer;
    let wrongStatusCode, wrongAccessControl, wrongConnection, wrongContentLength, wrongContentType, wrongServer;

    beforeEach('Here we will assing all base functions', function(){
        cy.fixture('uni_API_Data.json').then(function(uniAPIData){
            this.uniAPIData = uniAPIData;

            //Getting county name to URL
            uniCountry = uniAPIData[0].uniCountrySelection;

            //Getting status code to check response
            statusCode = uniAPIData[1].statusCode;
            wrongStatusCode = uniAPIData[1].wrongStatusCode;

            //Getting unidata to validate
            uniDomain = uniAPIData[2].uniDomain;
            uniCountryCode = uniAPIData[2].uniCountryCode;
            uniWebURL = uniAPIData[2].uniWebURL;
            selectedCountry = uniAPIData[2].selectedCountry;
            uniProvince = uniAPIData[2].uniProvince;
            uniName = uniAPIData[2].uniName;

            //Getting header details
            HeaderAccessControl = uniAPIData[3].HeaderAccessControl;
            headerConnection = uniAPIData[3].headerConnection;
            headerContentLength = uniAPIData[3].headerContentLength;
            headerContentType = uniAPIData[3].headerContentType;
            headerServer = uniAPIData[3].headerServer;

            //Getting wrong Header
            wrongAccessControl = uniAPIData[4].wrongAccessControl;
            wrongConnection = uniAPIData[4].wrongConnection;
            wrongContentLength = uniAPIData[4].wrongContentLength;
            wrongContentType = uniAPIData[4].wrongContentType;
            wrongServer = uniAPIData[4].wrongServer;

            cy.request({
                url : Cypress.env('uniURL') + (uniCountry)
            }).as('res')
        });
    });

    it ('POST Method :- Trying to validate POST method 405', function() {
        cy.request({
            method : 'POST',
            url : Cypress.env('uniURL') + (uniCountry),
            failOnStatusCode : false
        }).then((res)=>{
            expect(res.status).to.eq(405);
        })
    });

    it ('DELETE Method :- Trying to validate DELETE method 405', function() {
        cy.request({
            method : 'DELETE',
            url : Cypress.env('uniURL') + (uniCountry),
            failOnStatusCode : false
        }).then((res)=>{
            expect(res.status).to.eq(405);
        })
    });

    it ('GET : Validate university name not to Undefine', function() {
        cy.request({
            method : 'GET',
            url : Cypress.env('uniURL') + (uniCountry)
        }).then((res)=>{
            expect(res.body[5].name).to.not.equal();
        });
    });

    it ('API Header :- Negative validation for Wrong Access Control', function() {  
        cy.get('@res').its('headers').its('access-control-allow-origin')
        .should('not.include', wrongAccessControl);
    });

    it ('API Header :- Negative validation for Wrong connection', function() {  
        cy.get('@res').its('headers').its('connection')
        .should('not.contain', wrongConnection);
    });

    it ('API Header :- Negative validation for Wrong Content Length', function() {  
        cy.get('@res').its('headers').its('content-length')
        .should(() => {
            expect('@res').to.not.eq(wrongContentLength),
            expect('@res').to.not.have.length(5)
        });
    });

    it ('API Header :- Negative validation for Wrong Content Type', function() {  
        cy.get('@res').its('headers').its('content-type')
        .should(() => {
            expect('@res').to.not.eq(wrongContentType),
            expect('@res').to.not.have.property(wrongContentType)
        });
    });

    it ('API Header :- Negative validation for Wrong Server', function() {  
        cy.get('@res').its('headers').its('server')
        .should(()=> {
            expect('@res').to.not.equal(wrongServer);
        })
        .should('not.include', wrongServer)
    });

    it ('Status Code :- Validating wrong status code', function() {  
        cy.request({
            method : 'GET',
            url : Cypress.env('uniURL') + (uniCountry),
        }).then((res)=>{
            expect(res.status).to.not.eq(wrongStatusCode)
        });
    });

    it ('GET - Validating undefine data', function() {
        cy.request({
            method : 'GET',
            url : Cypress.env('uniURL') + (uniCountry),
        }).then((res)=>{
            expect(res.body[5].domains[0]).to.not.eq()
        });
    });

    it ('GET - Validating not equal data', function() {
        cy.request({
            method : 'GET',
            url : Cypress.env('uniURL') + (uniCountry),
        }).then((res)=>{
            expect(res.body[5].alpha_two_code).to.not.eq(wrongStatusCode)
        });
    });

    it ('GET - Validating not contain', function() {
        cy.request({
            method : 'GET',
            url : Cypress.env('uniURL') + (uniCountry),
        }).then((res)=>{
            expect(res.body[5].web_pages[0]).to.not.contain()
        });
    });

    it ('GET - Validating not contain', function() {
        cy.request({
            method : 'GET',
            url : Cypress.env('uniURL') + (uniCountry),
        }).then((res)=>{
            expect(res.body[5].name).not.eq();
        });
    });
});