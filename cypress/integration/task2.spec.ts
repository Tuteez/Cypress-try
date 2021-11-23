/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { api, cookies } from "../helpers/Helpers";
import { ProductCard } from "../page-objects/ProductCard";
import { ProductPage } from "../page-objects/ProductPage";

describe('Task 2. TC1. Product Card', () => {
  let productCard = new ProductCard;
  let product = new ProductPage
  beforeEach(() => {
    cookies.setRegion()
    api.loginAndOpenHomepage('auto@test.com', 'Password1')
  })

  it('product card', () => {
    // TODO: find a better way, at least this one better than find by text, would be good to add here and elsewhere data-qa attributes.
    // Looks weird that Special offers and Recommended promotions has similar href
    cy.xpath(productCard.specialOffersLocatorXpath).should('be.visible')

    productCard.checkAllProductCardDetails()

    productCard.clickTitle()

    product.checkProductDetails();
  })
})
