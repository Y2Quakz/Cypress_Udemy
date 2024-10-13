

const URLsite = "https://practice-automation.com/modals/"
const pText = "Hi, I’m a simple modal."


describe('Cypres Modals', () => {
  it('Open and Assert Modal', () => {
    cy.visit(URLsite)
    cy.get('#simpleModal').click()
    cy.get('#pum_popup_title_1318').should('be.visible')
    cy.get('p').contains(pText).should('be.visible')
    cy.get('.popmake-close').should('be.visible')
  })
})