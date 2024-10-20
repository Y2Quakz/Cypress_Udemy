describe('Cypress Clearing Inputs', () => {
  it('Type and Clear', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.getById('name-input').type('12345')
    cy.wait(2000)
    cy.getById('name-input').clear().type('new text')
  })
})