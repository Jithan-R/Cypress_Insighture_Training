import sampleTestPage from "../Training_Test_Function/sampleTestFunction.js";

describe("This is to check the test form", function(){
    let first_Name;
    let last_Name;
    let auto_Answer;
    let qty_Range;
    let long_Message;
    let select_Date;

    before('This will run before test', function () {
        // Base URL
        cy.visit('https://trytestingthis.netlify.app/');
        cy.wait(700);
        // "baseUrl": "https://opensource-demo.orangehrmlive.com/web/index.php",

        cy.fixture('sampleTestData.json').then(function(sampleTestData){
            this.sampleTestData = sampleTestData;
            first_Name = sampleTestData [0].firstName;
            last_Name = sampleTestData [0].lastName;
            auto_Answer = sampleTestData [0].autoAnswer;
            select_Date = sampleTestData [0].selectDate;
            qty_Range = sampleTestData [0].qtyRange;
            long_Message = sampleTestData [0].longMessage;
        });
    });

    it('Sucessfully set-up test form', function(){
        cy.thisTestForm(first_Name, last_Name, auto_Answer, qty_Range, select_Date, long_Message);
        cy.wait(1000);
    });
});