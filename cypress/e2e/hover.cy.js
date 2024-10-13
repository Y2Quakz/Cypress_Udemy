
const URLsite = 'https://practice-automation.com/hover/'

describe('Cypress Hover', () => {
  it('Lets test hover workaround', () => {
    //cy.viewport(800, 600)
    cy.viewport('macbook-15')
    cy.visit(URLsite)
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain', 'You did it!')
  })
})