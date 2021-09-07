/// <reference types="cypress" />
describe('Rock Paper Scissors-footer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays two options items by default', () => {
        cy.get('.footer div').should('have.class', 'attribution');
    });
})
