
export class ProductCard {
  specialOffersLocatorXpath = '//h2[@class=\'b-section--title\']/following-sibling::a[@href=\'/akcijos\']'
  titleLocator = '.b-product-title'

  private getFirst() {
    return cy.get('.b-product--wrap2').first()
  }

  private checkDiscountLabel() {
    return this.getFirst().find('.b-product-promo-label-primary').should('be.visible')
  }

  private checkIconSavedBaskets() {
    return this.getFirst().find('.b-icon-favourite').should('be.visible')
  }

  private checkPicture() {
    return this.getFirst().find('.b-product-wrap-img').should('be.visible')
  }

  private checkTitle() {
    return this.getFirst().find(`${this.titleLocator}`).should('be.visible')
  }

  private checkOldPrice() {
    return this.getFirst().find('.b-product-crossed-out-price').should('be.visible')
  }

  private checkDiscountPrice() {
    return this.getFirst().find('.b-product-price-current-number').should('be.visible')
  }

  private checkPricePerKg() {
    return this.getFirst().find('.b-product-price--extra').should('be.visible')
  }

  private checkAddToBasketButton() {
    return this.getFirst().find('.b-next-quantity-select--wrap').should('be.visible')
  }

  public checkAllProductCardDetails() {
    this.checkDiscountLabel()
    this.checkIconSavedBaskets()
    this.checkPicture();
    this.checkTitle();
    this.checkOldPrice();
    this.checkDiscountPrice();
    this.checkPricePerKg();
    this.checkAddToBasketButton();
  }

  public clickTitle() {
    return cy.get(this.titleLocator).first().click({ force: true })
  }

}