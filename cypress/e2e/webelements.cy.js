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

    })

    it("Should be radio unique", () => {
        cy.get("input[name='radioGroup1']")
            .first().check().should("be.checked");

        cy.get("input[name='radioGroup1']")
            .check("Radio 2")
            .should("be.checked")

        cy.get("input[name='radioGroup1']")
            .first()
            .should("not.be.checked");
    })

    it("Should be validate Check box", () => {

        //Valida quantos checkbox exitem
        cy.get("input[name='chkbox']").should("have.length", 4);

        cy.get("input[name='chkbox']")
            .check("Check 2")
            .should("be.checked")
            .uncheck("Check 2")
            .should("not.be.checked");

        cy.get("input[name='chkbox']")
            .check( {multiple:true} )            
            .should("be.checked")
            .uncheck("Check 4")
            .should("not.be.checked")
    })

    it("Should be validate Single Select", () => {
        //seletor do componente pai
        cy.get("select[name='dropdownlist']")
            .select("Item 2")
            .should("have.value", "item2");

        //Selector da lista com 10 itens
        cy.get("select[name='dropdownlist'] option")
            .first()
            .should("have.value", "item1");

        //Selector por um item específico
        cy.get("select[name='dropdownlist'] [value='item4']")
            .should("have.value", "item4");

        cy.get("select[name='dropdownlist'] option")
            .should("have.length", 10);

        //TODO Varrer o componente validando os 10 itens da lista

    })

    it("Should be validate Multi select", () => {
        cy.get("select[name='multiselectdropdown']")
            .select(["Item 2", "Item 5", "Item 9"]);

        //TODO Identificar os 3 elementos selecionados
    })
})
