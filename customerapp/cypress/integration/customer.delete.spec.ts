describe('Delete a Customer', () => {
    it("delete one", () => {
      cy.visit('/')
      cy.get(".fa-trash")
      .first()
      .click()
      .get('.card')
      .then(elems => {
          expect(elems.length).to.eq(5)
      })
    })
  })
  