///<reference types="cypress"/>

describe("Group test A", () => {
    it("My first test", () => {
        cy.visit("http://antoniotrindade.com.br/treinoautomacao");
    })

    it("Meu segundo teste", () => {

    })
})

describe("Group test B", () => {
    describe("Sub group  tests B", () => {

        it("My third test", () => {

        })
    })

    it("My fourth test", () => {
        
    })
})