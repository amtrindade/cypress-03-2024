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

    it("Should be validate Label", () => {
        cy.get('form > :nth-child(1) > .text-muted')
            .should("have.text", "TextField:");
    })

    it("Shoud be validate Radio Group", ()=> {

        //Seleciona o primeiro e valida que está checked
        cy.get("input[name='radioGroup1']")
            .first().check().should("be.checked");

        //Seleciona o terceiro e valida que está checked
        cy.get("input[name='radioGroup1']")
            .check("Radio 3").should("be.checked");

        //Seleciona o último e valida que está checked
        cy.get("input[name='radioGroup1']")
            .last().check().should("be.checked");

        //Valida quantos radios existem com este mesmo name
        cy.get("input[name='radioGroup1']").should("have.length", 4);

    } )
})
