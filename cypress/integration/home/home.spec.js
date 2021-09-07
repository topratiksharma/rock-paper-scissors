/// <reference types="cypress" />
describe('Rock Paper Scissors-Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays two options items by default', () => {
        cy.get('.home div').should('have.length', 2);
    });

    it('check the two options.', () => {
        cy.get('.home div').first().should('have.class', 'home__option');
        cy.get('.home div').last().should('have.class', 'home__option');
    });

    it('check the options text.', () => {
        cy.get('.home div').first().should('have.text', 'Player vs Computer');
        cy.get('.home div').last().should('have.text', 'Computer vs Computer');
    });
})
