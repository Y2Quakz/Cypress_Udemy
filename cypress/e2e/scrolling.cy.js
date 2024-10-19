

describe('Scrolling in Cypress', () => {
  it('Scroll into foorter view', () => {
    cy.visit('https://practice-automation.com/')
    cy.get('footer').scrollIntoView()
  })
})