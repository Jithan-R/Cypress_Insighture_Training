// /// <reference types = "cypress" />
// // import user from '../fixtures/apiTestData.json'
// describe('', () =>{
//     var genderMale;
//     var genderFemale;
//     var status;
//     var access_Token;
//     // it('', () =>{
//         //"baseUrl": "https://pokeapi.co/";
//     //     cy.request('/api/v2/pokemon/50').as('pokimonRequest');
//     //     cy.get('@pokimonRequest').then((pokimon) =>{
//     //         expect(pokimon.status).to.eq(200);
//     //         assert.isArray(pokimon.body.abilities.ability).to.eq('gold');
//     //     })
//     // });


//     it('This is to get the data from fixtures', () =>{
//         cy.fixture('apiTestData.json').then(function(apiTestData){
//             this.apiTestData = apiTestData;
//             access_Token = apiTestData[2].accessToken
//             genderMale = apiTestData[0].gender;
//             genderFemale = apiTestData[1].gender;
//             status = apiTestData[1].status;
//         });
//     });

//     // it ('API => GET', () => {
//     //     cy.request({
//     //         method : 'GET',
//     //         url : '/users/3/',
//     //         // headers : {
//     //         //     'authorization' : "Bearer" + access_Token
//     //         // }
//     //     }).then((res)=>{
//     //         expect(res.status).to.equal(200);
//     //         expect(res.body.gender).to.equal(genderFemale);
//     //         assert.isNumber(res.body.id);
//     //         assert.isNotArray(res.body.id);
//     //     }).should((res) => {
//     //         cy.log(JSON.stringify(res.body));
//     //     });
//     // });
    
//     // it ("API => DELETE", () => {
//     //     cy.request({
//     //         method : "DELETE",
//     //         url : '/users/3/'
//     //     })
//     // })

//     // it ('GET in API', () => {
//     //     cy.request({
//     //         method : 'GET',
//     //         url : '/2368/',
//     //         headers : {
//     //             'authorization' : "Bearer"  + access_Token
//     //         }
//     //     }).then((res)=>{
//     //         expect(res.status).to.equal(200) //Assertion
//     //         expect(res.body.gender).to.equal(genderFemale);
//     //         expect(res.body.status).to.equal(status);
//     //     }).should((res) => {
//     //         cy.log(JSON.stringify(res.body))
//     //     });
//     // });

//     it ('POST in API', () => {
//         cy.request({
//             method : 'POST',
//             // url : 'https://reqres.in/api/users',
//             url : Cypress.env('reqres') + 'users',
//             body : {
//                 'name': 'Jithan',
//                 'job': 'se',
//                 'id': 150
//             }
//         }).then((res)=>{
//             expect(res.body).has.property('name', 'Jithan')
//         }).should((res) => {
//             cy.log(JSON.stringify(res.body))
//         });
//     });

//     // it('DELETE in API', () =>{
//     //     cy.request({
//     //         method: 'DELETE',
//     //         url : 'https://reqres.in/api/users',
//     //     }).then((res)=>{
//     //         expect(res.body).to.eq('');
//     //     }).should((res) => {
//     //         cy.log(JSON.stringify(response.body))
//     //     });
//     // });



// });


// // describe('Products api', () => {
// //     context('GET /produtos', () => {
// //         it('should return a list with all products', () => {
// //             cy.request({
// //                 method: 'GET',
// //                 url: 'https://serverest.dev/produtos'
// //             })
// //                 .should((response) => {
// //                     cy.log(JSON.stringify(response.body))
// //                 });
// //         });
// //     });
// // });




// //uni_API_PositiveResposne
//     // it ('Header Validation', function () {
//     //     cy.request({
//     //         url : Cypress.env('uniURL') +'Sri+Lanka'
//     //     }).as('uniSL'),
        
//     //     cy.get('@uniSL').its('headers').its('access-control-allow-origin')
//     //     .should('include', '*'),

//     //     cy.get('@uniSL').its('headers').its('connection')
//     //     .should('include', 'keep-alive'),

//     //     cy.get('@uniSL').its('headers').its('content-length')
//     //     .should('include', 4903),

//     //     cy.get('@uniSL').its('headers').its('content-type')
//     //     .should('include', 'application/json'),
        
//     //     cy.get('@uniSL').its('headers').its('server')
//     //     .should('include', 'nginx/1.14.0')
//     // });