/// <reference types="Cypress" />

describe('Cypress E2E Testing Demo', () => {
  it('Assert Url', () => {
    cy.visit('https://example.com/')
    cy.url().should('contain', 'example.com')
  })

  it('Assert Title', () => {
    cy.visit('https://example.com')
    cy.title().should('contain', 'Example Domain')
  })

  it('Assert Element', () => {
    cy.visit('https://example.com')
    cy.get('h1').should('be.visible')
    cy.get('p').should('be.visible')
  })
})