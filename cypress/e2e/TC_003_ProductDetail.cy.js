


describe('TC_003_ProductDetail', {retries : 3}, () => { 
  it('Should verify the product detail product', () => {
      cy.visit('https://demoblaze.com/')
      //login
      cy.get('.hrefch').contains('Nexus 6').click()
      cy.get('.product-deatil').should('be.visible')
      cy.get('.name').contains('Nexus 6').should('be.visible')
      cy.get('.price-container').should('contain', '$650')
      cy.get('.description-tabs').should('be.visible')
      cy.get('.btn-lg').should('contain', 'Add to cart')
  })
})