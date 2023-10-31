/// <reference types="cypress" />
import { mainURL } from "../../../../tests/fixtures/URLFortest";
 
const baseUrl = mainURL;
export class ApiHelper {
  public post(url, body?, addHeader?, form?, failOnStatusCode = true): Cypress.Chainable {
    return cy.request({
      method: 'POST',
      url: `${baseUrl}${url}`,
      headers: addHeader,
      form: form,
      body: body,
      failOnStatusCode
    });
  }
  public put(url, body?, failOnStatusCode = true): Cypress.Chainable {
    return cy.request({
      method: 'PUT',
      url: `${baseUrl}${url}`,
      body: body,
      failOnStatusCode
    });
  }
  public get(url, body?, addHeader?, failOnStatusCode = true): Cypress.Chainable {
    return cy.request({
      method: 'GET',
      url: `${url}`,
      headers: addHeader,
      qs: body,
      failOnStatusCode
    });
  }
  public delete(url, body?, failOnStatusCode = true): Cypress.Chainable {
    return cy.request({
      method: 'DELETE',
      url: `${baseUrl}${url}`,
      qs: body,
      failOnStatusCode
    });
  }
}