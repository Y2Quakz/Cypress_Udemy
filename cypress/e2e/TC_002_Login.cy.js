


describe('TC_002_Login', {retries : 3}, () => { 
    it('Should login and logout from application', () => {
        cy.visit('https://demoblaze.com/')
        //login
        cy.get('#login2').should('be.visible').click()
        cy.get('#logInModal').should('be.visible')
        cy.get('#loginusername').should('be.visible').type('test', {force: true})
        cy.get('#loginpassword').should('be.visible').type('test', {force: true})
        cy.get('.btn.btn-primary').contains('Log in').click()
        cy.get('#nameofuser').contains('Welcome test').should('be.visible')
        //logout
        cy.get('#logout2').should('be.visible').click()
        cy.get('#login2').should('be.visible')
    })
})