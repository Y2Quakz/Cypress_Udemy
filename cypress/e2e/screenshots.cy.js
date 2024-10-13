
const URLsite = 'https://example.com'

describe('Cypress Screenshot', () => {
  it('Full Page Screenschot', () => {
    cy.visit(URLsite)
    cy.screenshot({ overwrite: true })
  })


  it('Single Element Screenschot', () => {
    cy.visit(URLsite)
    cy.get('h1').screenshot({ overwrite: true })
  })
})