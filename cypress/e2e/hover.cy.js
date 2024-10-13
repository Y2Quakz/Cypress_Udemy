
const URLsite = 'https://practice-automation.com/hover/'

describe('Cypress Hover', () => {
  it('Lets test hover workaround', () => {
    cy.visit(URLsite)
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain', 'You did it!')
  })
})