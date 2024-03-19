///<reference types="cypress"/>

describe("To Do tests", () => {

    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo#/");
    })

    it("Should be todo new task", () => {
        const task = "Fix the bug";

        cy.get('[data-test="new-todo"]')
            .type(`${task}{enter}`);

        cy.get("ul[class='todo-list'] li")
            .should("have.length", 3)
            .last()
            .should(`have.text`, `${task}`);

        cy.get("ul[class='todo-list'] li")
            .should("have.length", 3)
            .should('contain', `${task}`)

    })
})