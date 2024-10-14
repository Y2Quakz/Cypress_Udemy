
//Cypress Create Files
describe('Cypress Files', () => {
  it('Read/Write into JSON file', () => {
    //Store the files into json file
    cy.writeFile('test-data/data.json', {name : 'Kay', email : 'Kay@test.com'})

    //Read from JSON file, path of the file with 'then()' as a callback function | execute the 'expect()' function
    cy.readFile('test-data/data.json').then((user) => {
      expect(user.name).to.equal('Kay')
      expect(user.email).to.equal('Kay@test.com')
    })
  })

  it('Write into plain text file', () => {
    cy.writeFile('test-data/plain.txt', 'Hello World!', 'ascii')

  })
})