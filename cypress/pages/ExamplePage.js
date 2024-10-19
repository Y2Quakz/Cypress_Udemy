
class ExamplePage {
    openExamplePage() {
        cy.visit('https://example.com')
    }

    assertUrl() {
        cy.url().should('contain', 'https://example.com')
    }

    assertTitle() {
        cy.title().should('contain', 'Example Domain')
    }

}

export default ExamplePage