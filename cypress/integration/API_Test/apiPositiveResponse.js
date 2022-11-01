/// <reference types = "cypress" />

describe('Positive API Test', function () {
    let uniCountry;
    let statusCode, uniDomain, uniCountryCode, uniWebURL, selectedCountry, uniProvince, uniName;
    let HeaderAccessControl, headerConnection, headerContentLength, headerContentType, headerServer;

/*Checklist
    => Cover all positive scenarios                                                         => Done
    => Assert all headers                                                                   => Done
    => If the test fails due to some odd reasons we need to run them again automatically    => Done
    => Country name parameter value should be taken from a data file                        => Done
    => Static values should not be available in the test spec                               => Done
    => Cover all Negative scenarios                                                         => Done
    => Print all the responses into a json file - File name format [currentDateTime.json]   => Done
    => Static values should not be available in the test spec                               => Done
    => We should be able to run the tests according to their category                       => Done
*/

    beforeEach('Here we will assing all base functions', function(){
        cy.fixture('uni_API_Data.json').then(function(uniAPIData){
            this.uniAPIData = uniAPIData;

            //Getting county name to URL
            uniCountry = uniAPIData[0].uniCountrySelection;

            //Getting status code to check response
            statusCode = uniAPIData[1].statusCode;

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
        });
    })

    it ('API Header :- Asserting headers', function() {
        // Asserting all headers
        cy.request({
            url : Cypress.env('uniURL') + (uniCountry)
        }).as('res'),
        
        cy.get('@res').its('headers').its('access-control-allow-origin')
        .should('include', HeaderAccessControl),

        cy.get('@res').its('headers').its('connection')
        .should('include', headerConnection),

        cy.get('@res').its('headers').its('content-length')
        .should('include', headerContentLength),

        cy.get('@res').its('headers').its('content-type')
        .should('include', headerContentType),
        
        cy.get('@res').its('headers').its('server')
        .should('include', headerServer);
    });

    it ('GET University of Jaffna - Sri Lanka in Array [1] - Positive', function() {
        //GET university details
        cy.request({
            method : 'GET',
            url : Cypress.env('uniURL') + (uniCountry),
        }).then((res)=>{
            expect(res.status).to.eq(statusCode),
            expect(res.body[5].domains[0]).to.eq(uniDomain),
            expect(res.body[5]).has.property('alpha_two_code', uniCountryCode),
            expect(res.body[5].web_pages[0]).to.eq(uniWebURL),
            expect(res.body[5]).has.property('country', selectedCountry),
            expect(res.body[5]).has.property('state-province', uniProvince),
            expect(res.body[5].name).to.eq(uniName);
        });
    });
});
