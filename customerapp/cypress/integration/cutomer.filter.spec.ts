describe('Filter Customers', () => {
    it('get Gellers', () => {
      cy.visit('/')
      cy.get("input[name='searchText']")
      .clear()
      .type("Geller")
      .get('.card')
      .then(elems => {
          expect(elems.length).to.eq(2)
      })
    })
  })
  