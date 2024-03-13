///<reference types="cypress"/>

describe("Work with webelements", () => {

    beforeEach(()=> {
        cy.visit("/elementsweb.html");
    })

    it("Should validate title page", ()=> {
        cy.title().should('to.be.equal', 'WebElements Test Page Lab');
    })

    it("Should be validate Hello World in text field", () =>{
        cy.get("input[name='txtbox1']")
            .type("Hello world")
            .should("have.value", "Hello world")
    })


})