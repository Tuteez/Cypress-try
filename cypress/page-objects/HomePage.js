export class HomePage {
  open() {
    cy.visit('/')
    // TODO write better waiter. intresting: header elements found by cypress (and clicked) but it still doesn't appers (weigth and high are 0)
    // Cant assure that it works because cypres doesnt load the app
    cy.contains('Pasirinkta', { timeout: 10000 })
  }

  clickLoginLink() {
    return cy.get('button.b-login-register--login').eq(1).click()
  }
}