///<reference types="cypress"/>

describe("Work with Web elements", () => {

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

    it("Should be validate enable/disable TextFields", () => {
        cy.get("input[name='txtbox1']")
            .should("be.enabled");

        cy.get("input[name='txtbox2']")
            .should("be.disabled");
            //.should("not.be.enabled");

    })

    it("Should be validate Text in textfield", () => {
        cy.get("input[name='txtbox2']")
            .type("Curso Cypress", {force: true})
            .should("have.value", "Curso Cypress");

    })
})
