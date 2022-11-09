// https://docs.cypress.io/api/table-of-contents
import {
  Given as Givet,
  When as När,
  Then as Så,
} from "cypress-cucumber-preprocessor/steps";

const selectors = {
  rubrik: "[data-cy='startsida-rubrik']",
  settingsComponent: "[data-cy='startsida-settings-component']",
  overviewComponent: "[data-cy='startsida-overview-component']",
  colorPickerBody: "[data-cy='settings-color-picker-body'] input",
  colorPickerMain: "[data-cy='settings-color-picker-main'] input",
  inputRubrik: "[data-cy='settings-input-rubrik']",
  tabStartsidaSettings: "[id='startsida-tab-0']",
  tabStartsidaOverview: "[id='startsida-tab-1']",
  overviewColorSampleBody: "[data-cy='overview-color-sample-body']",
  overviewColorSampleMain: "[data-cy='overview-color-sample-main']",
};

Givet("att användaren är inloggad", function () {
  cy.visit("http://localhost:8080/#/startsida");
});

Givet("rubriken {string} visas", (rubrik) => {
  cy.get(selectors.rubrik).should("have.text", rubrik);
});

När(
  "användaren anger färgen {string} som färg för {string}",
  (color, element) => {
    var selector;
    if (element === "body") selector = selectors.colorPickerBody;
    else if (element === "main") selector = selectors.colorPickerMain;
    else throw element + " has not been not implemented.";

    cy.get(selector).clear().type(color).type("{enter}");
  }
);

När("användaren anger rubriken {string}", (rubrik) => {
  cy.get(selectors.inputRubrik).clear().type(rubrik);
});

När("användaren navigerar till {string}", (tab) => {
  if (tab === "Inställningar") {
    cy.get(selectors.tabStartsidaSettings).click();
  } else if (tab === "Översikt") {
    cy.get(selectors.tabStartsidaOverview).click();
  } else {
    throw tab + " has not been implemented.";
  }
});

Så("färgprovet för {string} har färgen {string}", (colorSample, hexCode) => {
  
  if (colorSample === "body") {
    cy.get(selectors.overviewColorSampleBody)
      .should("have.css", "background-color")
      .and("eq", hexToRgb(hexCode));
  } else if (colorSample === "main") {
    cy.get(selectors.overviewColorSampleMain)
      .should("have.css", "background-color")
      .and("eq", hexToRgb(hexCode));
  } else {
    throw colorSample + " has not been implemented.";
  }
});

function hexToRgb(c){
  if(/^#([a-f0-9]{3}){1,2}$/.test(c)){
      if(c.length== 4){
          c= '#'+[c[1], c[1], c[2], c[2], c[3], c[3]].join('');
      }
      c= '0x'+c.substring(1);
      return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+')';
  }
  return '';
}