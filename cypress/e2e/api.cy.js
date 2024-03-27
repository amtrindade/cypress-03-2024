///<reference types="cypress"/>

describe("Tests API Rest Star Wars", () => {

    it("Get all people", () => {
        cy.request({
            url: 'https://swapi.dev/api/people/',
            method: 'GET',
        }).as('getAllPeople');

        cy.get('@getAllPeople').then( response => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.property('count', 82);
        })
    })

    it("Get one person", () => {
        cy.request({
            url: 'https://swapi.dev/api/people/1/',
            method: 'GET'
        }).as('getPeople');

        cy.get('@getPeople').then( response => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.property("name", "Luke Skywalker");
            expect(response.body).to.have.property("gender", "male");
            expect(response.body).to.have.property('hair_color');
        })
    })

    it("Response invalid 404", () => {
        cy.request({
            url: 'https://swapi.dev/api/people/x',
            method: 'GET',
            failOnStatusCode: false
        }).as("getError");

        cy.get('@getError').then( response => {
            expect(response.status).to.be.equal(404);
            expect(response.body).to.be.property('detail', 'Not found');
        })
    })
})