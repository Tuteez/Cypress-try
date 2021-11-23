
export class ProductPage {
  specialOffersLocator = 'section.b-home--products-section'
  titleLocator = '.b-product-title'
  productLocator = '.b-products-allow-desktop-view'
  
  private checkDiscountLabel() {
    return cy.get(`${this.productLocator} .b-product-promo-label-primary`).should('be.visible')
  }

  private checkIconSavedBaskets() {
    return cy.get(`${this.productLocator} .b-icon-favourite`).should('be.visible')
  }

  private checkPicture() {
    return cy.get(`${this.productLocator} img`).should('be.visible')
  }

  private checkTitle() {
    return cy.get(`${this.productLocator} h1[itemprop="name"]`).should('be.visible')
  }

  private checkOldPrice() {
    return cy.get(`${this.productLocator} .b-product-crossed-out-price`).should('be.visible')
  }

  private checkDiscountPrice() {
    return cy.get(`${this.productLocator} .b-product-price-current-number`).should('be.visible')
  }

  private checkPricePerKg() {
    return cy.get(`${this.productLocator} .b-product-price--extra`).should('be.visible')
  }

  private checkAddToBasketButton() {
    return cy.get(`${this.productLocator} button[aria-label='Į krepšelį']`).should('be.visible')
  }

  private checkOfferValidTo() {
    return cy.get(`${this.productLocator} .b-product-info--offer-valid-to`).should('be.visible')
  }

  private checkDescription() {
    return cy.get(`dd[itemprop=description]`).should('be.visible')
  }

  private checkIngridients() {
    return cy.xpath('//dt[normalize-space()=\'Ingridientai\']').should('be.visible')
  }

  private checkInstructionsForUse() {
    return cy.xpath('//dt[normalize-space()=\'Naudojimo Instrukcija\']').should('be.visible')
  }

  private checkStorageConditions() {
    return cy.xpath('//dt[normalize-space()=\'Laikymo sąlygos\']').should('be.visible')
  }

  private checkPackage() {
    return cy.xpath('//dt[normalize-space()=\'Pakuotė\']').should('be.visible')
  }

  private checkOtherInfo() {
    return cy.xpath('//h3[normalize-space()=\'Kita informacija\']').should('be.visible')
  }

  public checkProductDetails() {
    this.checkDiscountLabel()
    this.checkIconSavedBaskets()
    this.checkPicture();
    this.checkTitle();
    this.checkOldPrice();
    this.checkDiscountPrice();
    this.checkPricePerKg();
    this.checkAddToBasketButton();
    this.checkOfferValidTo();
    this.checkDescription()
    // this.checkIngridients() //not all products has
    // this.checkInstructionsForUse() //not all products has
   this.checkStorageConditions()
   this.checkPackage()
   this.checkOtherInfo()
  }
}