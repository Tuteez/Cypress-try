/// <reference types="cypress" />

import { cookies } from "../helpers/Helpers";
import { HomePage } from "../page-objects/HomePage";
import { LoginModal } from "../page-objects/LoginModal";

describe('Login', () => {
  let loginModal = new LoginModal()
  let homePage = new HomePage()

  beforeEach(() => {
    cookies.setRegion()
    homePage.open()
  })

  it('user can login', () => {
    homePage.clickLoginLink()
    //TODO move test data to process.env
    loginModal.fillEmail('auto@test.com')
    loginModal.fillPassword('Password1')
    loginModal.clickRegister()

    cy.get('.b-header--customer-menu').should('be.visible')
  })

})
