
export class RegisterPage {

    fillName(name) {
        return cy.get('#fullname').type(name)
    }

    fillEmail(email) {
        return cy.get('#email').type(email)
    }

    fillPassword(pass) {
        return cy.get('#password').type(pass)
    }

    fillPhone(phone) {
        return cy.get('input#phone').type(phone)
    }

    clickContinue() {
        return cy.get('.b-green').click()
    }

    selectAdress(adress) {
        cy.get('#searchValue').type(adress)
        return cy.contains(adress).click({ force: true })
    }

    agreeToTermsAndConditions() {
        return cy.get('#agree_to_terms_and_conditions').click({ force: true })
    }

    submit(){
        return cy.get('button[type="submit"]').click()
    }
}
