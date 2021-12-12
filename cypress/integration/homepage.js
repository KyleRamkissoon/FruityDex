/* eslint-disable no-undef */
describe('Example test', () => {
  before(() => {
    cy.signIn()
  })

  after(() => {
    cy.clearLocalStorageSnapshot()
    cy.clearLocalStorage()
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  it('should be logged in', () => {
    cy.visit('/')
  })
})
