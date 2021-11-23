import { HomePage } from "../page-objects/HomePage"

let token = 'Basic YXBpa2V5OlNlY3JldEtleQ=='
let homePage = new HomePage()

export const api = {
  loginAndOpenHomepage(mail, password) {
    cy.request({
      method: 'POST',
      form: true,
      url: '/api/eshop/v1/user/login',
      headers: {
        'Authorization': token
      },
      body: {
        'email': mail,
        'password': password,
        'rememberMe': true
      }
    }).then(
      (response) => {
        expect(response.status).to.be.equal(200)
      }
    )
    homePage.open()
  }
}

export const cookies = {
  setRegion() {
    cy.setCookie('region', 'barbora.lt')
  }
}

