// https://on.cypress.io/api

describe('Header test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Weather forecast')
  })
})
//
// describe('Place autocomplete test', () => {
//   it('visits the place autocomplete input', () => {
//     cy.intercept('/search*', [{ item: 'Book 1' }, { item: 'Book 2' }]).as(
//       'getSearch'
//     )
//
// // our autocomplete field is throttled
// // meaning it only makes a request after
// // 500ms from the last keyPress
//     cy.get('[data-testid="autocomplete"]').type('Book')
//
// // wait for the request + response
// // thus insulating us from the
// // throttled request
//     cy.wait('@getSearch')
//
//     cy.get('[data-testid="results"]')
//       .should('contain', 'Book 1')
//       .and('contain', 'Book 2')
//   })
// })
