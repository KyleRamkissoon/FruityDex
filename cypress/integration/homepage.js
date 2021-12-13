/* eslint-disable no-undef */
describe('Authenticator:', function () {
  // Step 1: setup the application state
  beforeEach(function () {
    cy.visit('/')
  })

  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      // Step 2: Take an action (Sign in)
      cy.get(selectors.usernameInput).type('fruitdex3613@gmail.com')
      cy.get(selectors.signInPasswordInput).type('password')
      cy.get(selectors.signInSignInButton).contains('Sign In').click()
    })
  })
})
export const selectors = {
  // Auth component classes
  usernameInput: '[data-test="username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
}
