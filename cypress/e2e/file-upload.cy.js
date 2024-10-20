

describe('template spec', () => {
  it('Should Upload JSON example file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.getById('file-upload').selectFile('cypress/fixtures/example.json')
    cy.getById('file-submit').click()
    cy.getById('uploaded-files').contains('example.json').should('be.visible')
  })
})