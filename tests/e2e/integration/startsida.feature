# language: sv
Egenskap: Verifiera att startsidan fungerar
Scenario: Användaren ändrar inställningar och kontrollerar ändringarna i översikten
Givet att användaren är inloggad
Och rubriken "cypress-demo" visas
När användaren anger färgen "#444444" som färg för "body"
Och användaren anger färgen "#99FF99" som färg för "main"
Och användaren anger rubriken "Hello //Cypress"
Och användaren navigerar till "Översikt"
Så färgprovet för "body" har färgen "#444444"
Och färgprovet för "main" har färgen "#99ff99"
Och rubriken "Hello //Cypress" visas
