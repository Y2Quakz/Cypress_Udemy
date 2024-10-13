

describe('Forms, Buttons & Checkbox', () => {
  it('Submit And Assert Form', () => {
    
    //Variables with Data
    const name = 'Kay'
    const drink = 'Water'
    const color = 'Red'
    const email = 'kay#test.com'
    const message = 'I Like Cypress'



    // Load the Form
    cy.visit('https://practice-automation.com/form-fields/')
    
    //OutDated Site don't have this class anymore.
    //cy.get('[data-test="contact-form"]').should('be.visible')
    cy.get('.entry-content').should('be.visible')


    // Fill the Form
    cy.get('#name-input').type(name)
    cy.contains(drink).click()
    cy.contains(color).click()
    cy.get('#email').type(email)
    cy.get('#message').type(message)
    cy.get('#submit-btn').click()


   // Assert Form Details // OutDated Site don't redirect, just leave a message 
   // cy.get('.contact-form-submission').should('be.visible')
   // cy.get('.field-value').contains(name).should('be.visible')
   // cy.get('.field-value').contains(drink).should('be.visible')
   // cy.get('.field-value').contains(color).should('be.visible')
   // cy.get('.field-value').contains(email).should('be.visible')
   // cy.get('.field-value').contains(message).should('be.visible')


  })
})