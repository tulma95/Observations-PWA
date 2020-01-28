describe('From index ', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Observations')
  })
  it('add observation can be opened', function() {
    cy.contains('Add observation').click()
    cy.contains('Add new Observation')
  })
  it('New observation can be added', function() {
    cy.contains('Add observation').click()
    cy.get('[data-cy=Specie]').type('pigeon')
    cy.get('[data-cy=Notes').type('Small bird')
    cy.get('[data-cy=Rarity]').click()
    cy.get('[id=common]')
      .trigger('mousemove')
      .click()
    cy.get('[data-cy=Submit]').click()
    cy.contains('Succesfully added new observation')
  })
  it('Index should have new observation with specie, name and rarity', function() {
    cy.contains('pigeon')
    cy.contains('Small bird')
    cy.contains('common')
  })
})
