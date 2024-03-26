///<reference types="cypress"/>

import loc from '../../support/locators'

describe('Work with locals', () => {

    beforeEach(() => {
        cy.visit('https://center.umov.me/');
        //comando personalizado
        cy.login('trindade', 'cypress', 'trocarsenha')

        cy.get(loc.MENU.OP_LOCATIONS).click()

    })

    it('Should be insert local', () => {
        const description = 'Local Cypress - '+ Math.floor(Math.random() * 1001) 

        cy.get(loc.LIST_LOCAL.BTN_ADD).click()

        cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(description)
        cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(description)

        cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

        cy.search(description)

        cy.get(loc.LIST_LOCAL.TD_FIRST_DESCRIPTION).should("have.text", description);

    })

})