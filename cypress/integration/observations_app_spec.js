import { deleteDB } from 'idb'

function fillObservationForm(specie, rarity, notes) {
  cy.get('[data-cy=Specie]').type(specie)
  cy.get('[data-cy=Notes').type(notes)
  cy.get('[data-cy=Rarity]').click()
  cy.get(`[id=${rarity}]`)
    .trigger('mousemove')
    .click()
}

describe('From index ', function() {
  beforeEach(function() {
    deleteDB('Observations', {
      blocked() {
        console.log('bockas')
      }
    })
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
    fillObservationForm('pigeon', 'common', 'Small bird')
    cy.get('[data-cy=Submit]').click()
    cy.contains('Succesfully added new observation')
    cy.contains('View observations').click()
    cy.contains('pigeon')
    cy.contains('Small bird')
    cy.contains('common')
  })
  it('Observation with image can be added', function() {
    cy.contains('Add observation').click()
    fillObservationForm('Parrot', 'extremelyRare', 'Can talk like a human')
    cy.fixture('bird.jpg').then(fileContent => {
      cy.get('[data-cy=file]').upload({
        fileContent,
        fileName: 'bird.jpg',
        mimeType: 'image/jpeg'
      })
    })
    cy.get('[data-cy=Submit]').click()
    cy.contains('Succesfully added new observation')
    cy.contains('View observation').click()
    cy.get('.image > img')
  })
  it.only('Show errors and prevent submitting if no name, notes or rarity', function() {
    cy.contains('Add observation').click()
    cy.get('[data-cy=Submit]').click()
    cy.contains("Specie can't be empty")
    cy.contains('You must choose rarity')
    cy.contains("Notes can't be empty")
  })
})
