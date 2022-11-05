// https://docs.cypress.io/api/table-of-contents
import {
  Given as Givet,
  When as När,
  Then as Så,
} from "cypress-cucumber-preprocessor/steps";

const selectors = {
  rubrik: "[data-cy='login-page-rubrik']",
  inputUsername: "[data-cy='login-page-input-username']",
  inputPassword: "[data-cy='login-page-input-password']",
  buttonLogin: "[data-cy='login-page-button-login']"
};

Givet("att sidan har öppnats", function () {
  cy.visit("http://localhost:8080/#/");
});

Givet("rubriken {string} visas", (rubrik) => {
  cy.wait(500);
  cy.get(selectors.rubrik).should("have.text", rubrik);
});

När("användaren anger {string} som användarnamn", (anvandarnamn) => {
  cy.get(selectors.inputUsername).type(anvandarnamn);
});

När("användaren anger {string} som lösenord", (losenord) => {
  cy.get(selectors.inputPassword).type(losenord);
});

När("användaren trycker på logga in", () => {
  cy.get(selectors.buttonLogin).click();
});

Så("dirigeras användaren till startsidan", () => {
  cy.url().then((url) => {
    expect(url).to.include("/startsida");
  });
});