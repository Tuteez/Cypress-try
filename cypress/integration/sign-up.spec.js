/// <reference types="cypress" />

import { cookies } from "../helpers/Helpers";
import { RegisterPage } from "../page-objects/RegisterPage";

describe('Task 1', () => {
  let registerPage = new RegisterPage

  const randomNumber = Cypress._.random(0, 1e6)
  const randomEmail = `mail${randomNumber}@domain.lt`

  beforeEach(() => {
    cookies.setRegion()
    cy.visit('/registruotis')
  })

  it('Sign Up', () => {
    registerPage.fillName('John Doe')
    registerPage.fillEmail(randomEmail)
    registerPage.fillPassword('Passsword1')
    registerPage.fillPhone('63319698')
    registerPage.clickContinue()
    registerPage.selectAdress('Pilies g. 2')
    registerPage.clickContinue()
    registerPage.agreeToTermsAndConditions()
    registerPage.submit()

    cy.title().should('equal', 'BARBORA internetinė parduotuvė')
  })
})
