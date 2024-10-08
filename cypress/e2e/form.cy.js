describe('Gorms, Buttons & Checkbox', () => {
  it('Submit And Assert Form', () => {
    // Load the Form
    cy.visit('https://practice-automation.com/form-fields/')
    //cy.get('[data-test="contact-form"]').should('be.visible')

    // Fill the Form
    cy.get('#name-input').type('Peter')
    cy.contains('Water').click()
    cy.contains('Red').click()
    cy.get('#email').type('peter@test.com')
    cy.get('#message').type('I Like Cypress')
    cy.get('#submit-btn').click()
    // Assert Form Details
  })
})