/// <reference types="cypress" />
import { Assertion } from "../Assertion/Assertion";

const assertion: Assertion = new Assertion();
export class BaseUI {
  /**

   * Base page object class. Contains common methods for all page objects.

   * Navigation:

   * - Clicks section

   * - Checks section

   * - Fill section

   * - Scroll section

   * - Visit section

   * - Intercept section
   */

  public getElementByAlias(
    alias: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`@${alias}`);
  }

  public getHref(selector) {
    return cy.get(selector)
      .first()
      .find('a')
      .invoke('attr', 'href')
      .then((href) => {
      return href;
    });
  }

  public getURL() {
    return cy.location().its('href')
  }

  //** Clicks Section */

  public clickOnElement({
    selector,

    elementName,

    quantity = 0,

    parent = false,

    forceOrNo = false,
  }: {
    selector: string;

    elementName?: string;

    quantity?: number;

    parent?: boolean;

    forceOrNo?: boolean;
  }): void {
    if (elementName) {
      if (parent) {
        cy.get(selector)

          .contains(elementName)

          .eq(quantity)

          .parent()

          .click();

        return;
      } else {
        cy.contains(selector, elementName)

          .eq(quantity)

          .click({ force: forceOrNo });

        return;
      }
    }

    cy.get(selector)

      .eq(quantity)

      .click({ force: forceOrNo });
  }

  public doubleClickOnElement({
    selector,

    elementName,

    quantity = 0,
  }: {
    selector: string;

    elementName?: string;

    quantity?: number;
  }): void {
    if (elementName) {
      cy.contains(selector, elementName).eq(quantity).dblclick();

      return;
    }

    cy.get(selector).eq(quantity).dblclick();
  }

  //** Checks Section */

  public checkUrlContainsPath(path: string): void {
    cy.url().should("contain", path);
  }

  public checkUrlPath(path: string): void {
    cy.url().should('include', path)
  }

  public checkElementIsVisible(
    selector: string,
    isVisible: boolean,
    isNeedScroll: boolean = false
  ): void {
    if (isNeedScroll) {
      cy.get(selector).scrollIntoView();
    }

    cy.get(selector).should(isVisible ? "be.visible" : "not.exist");
  }

  public checkElementWithTextIsVisible({
    selector,
    text,
    isVisible,
  }: {
    selector: string;
    text: string;
    isVisible: boolean;
  }): void {
    cy.contains(selector, text).should(isVisible ? "be.visible" : "not.exist");
  }

  public checkElementHaveValue({
    selector,
    value,
  }: {
    selector: string;
    value: string;
  }): void {
    cy.get(selector).should("have.value", value);
  }

  public checkElementHaveText({
    selector,
    value,
  }: {
    selector: string;
    value: string;
  }): void {
    cy.get(selector).should("have.text", value);
  }

  public checkElementTextContains({
    selector,
    value,
  }: {
    selector: string;
    value: string;
  }): void {
    cy.get(selector).should("contain.text", value);
  }

  public checkToggleState({
    selector,
    expectedState,
    click = false,
  }: {
    selector: string;
    expectedState: string;
    click?: boolean;
  }): void {
    cy.get(selector)
      .first()
      .scrollIntoView();

    cy.get(selector).then((toggle) => {
      if (click) {
        cy.wrap(toggle).click({ force: true });
        cy.wrap(toggle).should(expectedState);
      }

      cy.wrap(toggle).should(expectedState);
    });
  }

  public checkPrice({
    selector, 
    childSelector, 
    isLow = true, 
    expectedPrice
  }: {
    selector: string;
    childSelector: string;
    isLow?: boolean;
    expectedPrice: string;
  }) {
    let q = isLow ? 0 : 1;
    cy.get(selector)
      .find(childSelector)
      .eq(q)
      .should("include.text", expectedPrice)
  }

  public checkElementLengthNotNull(selector: string): void {
    cy.get(selector).then(($element) => {
      assertion.assertionLengthElementNotEqualNull($element)
    })
  }

  //** Fill Section */

  public selectFile({
    selector,

    routeToFile,

    forceUpload = false,
  }: {
    selector: string;

    routeToFile: string;

    forceUpload: boolean;
  }): void {
    cy.get(selector).selectFile(routeToFile, { force: forceUpload });
  }

  public fillField({
    selector,

    value,
  }: {
    selector: string;

    value: string;
  }): void {
    cy.get(selector).clear();

    cy.get(selector).type(value);
  }

  public clearField(selector: string): void {
    cy.get(selector).clear();
  }

  /**
   * Scroll and check element visibility
   **/
  public checkScrollblockIsVisible({ 
    selector,
    isSingular = true,
    quantity = 0
  }: {
    selector: string;
    isSingular?: boolean;
    quantity?: number;
  }): void {
    if (isSingular) {
      cy.get(selector)
      .scrollIntoView();
      cy.get(selector)
      .should('be.visible');
    } else {
      cy.get(selector)
      .eq(quantity)
      .scrollIntoView();
      cy.get(selector)
      .should('be.visible');
    }
  }

  //** Scroll section */

  public scrollToElementClick({
    selector,
    contains,
    quantity = 0,
  }: {
    selector: string;
    contains?: string;
    quantity?: number;
  }): void {
    if (contains) {
      cy.contains(contains).eq(quantity).scrollIntoView();
      cy.contains(contains).eq(quantity).click();
      return;
    }
    cy.get(selector).eq(quantity).scrollIntoView();
    cy.get(selector).eq(quantity).click();
  }

  //** Visit section */

  public visitPage(url: string, path?: string): void {
    if (!path) {
      cy.visit(url);
    } else cy.visit(url + path);
  }

  //** Intercept section */

  public interceptRequest(method: string, url: string, alias: string): void {
    cy.intercept(method, url).as(alias);
  }

  public waitInterceptResponse({
    alias,
    expectedStatusCode,
    checkBody,
  }: {
    alias: string;
    expectedStatusCode: number;
    checkBody: boolean;
  }): void {
    cy.wait(`@${alias}`).then((interception) => {
      if (interception.response) {
        const response = interception.response;
        assertion.assertionStatusCode(response.statusCode, expectedStatusCode);
        if (checkBody) {
          assertion.assertionBodyResponseIsNotEmpty(response);
        }
      }
    });
  }
}
