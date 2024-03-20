///<reference types="cypress"/>

describe("To Do tests", () => {

    const task = "Fix the bug";

    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo#/");
    })

    it("Should be todo new task", () => {
        // cy.get('[data-test="new-todo"]')
        //     .type(`${task}{enter}`);

        cy.xpath("//input[@class='new-todo']").type(`${task}{enter}`)

        //Validação 1    
        cy.get("ul[class='todo-list'] li")
            .should("have.length", 3)
            .last()
            .should(`have.text`, `${task}`);

        //Validaçao 2 a nível de referência
        cy.get("ul[class='todo-list'] li")
            .should("have.length", 3)
            .should('contain', `${task}`)
    })

    describe("Tests condition task added", () => {

        beforeEach(() =>{
            cy.get('[data-test="new-todo"]').type(`${task}{enter}`)
        })

        it.only("Should complete task", () => {
            cy.get("ul[class='todo-list'] li")
                .contains(`${task}`)
                .parent()
                .pause()
                .find('input')
                .check()
                .should('be.checked')
    
            cy.get('.filters')
                .contains("Completed")
                .click()
    
            cy.get("ul[class='todo-list'] li")
                .should("have.length", 1)
                .should(`have.text`, `${task}`)
    
        })
    
        it("Should be delete new task", () => {
            cy.get("ul[class='todo-list'] li")
                .contains(`${task}`)
                .parent()                
                .find('input')
                .check()
                .should('be.checked')
    
            cy.get("ul[class='todo-list'] li")                
                .contains(`${task}`)
                .parent()
                .find('button')
                .click({force: true})
    
            cy.get("ul[class='todo-list'] li")
                .should("have.length", 2)
                .should("not.have.text", `${task}`)
        })

    })
})