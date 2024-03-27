///<reference types="cypress"/>

import loc from '../../support/locators'

describe('Work with locals', () => {

    beforeEach(() => {
        cy.visit('https://center.umov.me/');
        //comando personalizado
        cy.login('trindade', 'cypress', 'a')

        cy.get(loc.MENU.OP_LOCATIONS).click()

    })

    it('Should be insert local', () => {
        const description_insert = 'Local Insert Cy - '+ Math.floor(Math.random() * 100001) 

        cy.get(loc.LIST_LOCAL.BTN_ADD).click()

        cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(description_insert)
        cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(description_insert)

        cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

        cy.search(description_insert)

        cy.get(loc.LIST_LOCAL.TD_FIRST_DESCRIPTION).should("have.text", description_insert);

    })

    describe("Test with register local", () => {
        let description;

        beforeEach(() => {
            description = 'Local Cy - '+ Math.floor(Math.random() * 100001)

            cy.get(loc.LIST_LOCAL.BTN_ADD).click()
            cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(description)
            cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(description)
            cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()
            cy.search(description)

        })

        it("Should be edit description local", () => {
            const edit_description = description + " edited";

            cy.get(loc.LIST_LOCAL.TD_FIRST_BT_EDIT).click();
            cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).clear().type(edit_description)
            cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

            cy.search(edit_description)

            cy.get(loc.LIST_LOCAL.TD_FIRST_DESCRIPTION).should("have.text", edit_description);
        })

        it("Should be inactive local", () => {
            cy.get(loc.LIST_LOCAL.TD_FIRST_BT_EDIT).click();
            cy.get(loc.DETAIL_LOCAL.CHK_ACTIVE).uncheck();
            cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

            cy.search(description)

            cy.get(loc.LIST_LOCAL.TD_FIRST_DESCRIPTION).should("not.exist");
        })
    })
})