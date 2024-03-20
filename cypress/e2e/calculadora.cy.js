///<reference types="cypress"/>

describe("Work with calculadora", () => {

    beforeEach(() =>{
        cy.visit("https://antoniotrindade.com.br/treinoautomacao/desafiosoma.html")
    })

    it("Should be sum wait", () => {
        cy.get('#number1').type(10)
        cy.get('#number2').type(4)
        cy.get('#somar').click()
        //cy.wait(10000)

        cy.get('#total', {timeout:7000 }).should("have.value", "14")
        cy.get('#total').should("have.value", "14")
    })

})