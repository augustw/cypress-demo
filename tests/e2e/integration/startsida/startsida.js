// https://docs.cypress.io/api/table-of-contents
import { Given as Givet, When as När, Then as Så } from 'cypress-cucumber-preprocessor/steps'

När('startsidan öppnas', function() {
  cy.visit("http://localhost:8080/#/");
  cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
});
