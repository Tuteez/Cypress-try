export class LoginModal {

  fillEmail(email) {
    return cy.get('#email').type(email)
  }

  fillPassword(pass) {
    return cy.get('#password').type(pass)
  }

  clickRegister() {
    return cy.get('button[type="submit"]').click()
  }
}