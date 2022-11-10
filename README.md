# cypress-demo

## Inledning

En aningen slafsig men till sitt syfte väl fungerande demonstration över hur man med enkla medel kan skapa transparens och delaktighet i sin testprocess.

Förvisso ingen ovanlig approach, men det kan utnyttjas mycket mer i webbapplikationer än vad det tycks göra idag.

**Demoprojektet bygger på följande tekniker:**

* **Vuejs** (JS-ramverk)
* **Cypress** (E2E Frontend Testing Framework)
* **Cucumberjs** (Gherkin SBE)

## Scenarion
<em>Testscenarion som används som grund för testerna i detta projekt.</em>

**Scenario**: Inloggningen går inte att genomföra när användarnamnet är för långt<br>
**Givet** att sidan har öppnats<br>
**Och** rubriken "Logga in" visas<br>
**När** användaren anger "august.wande" som användarnamn<br>
**Och** användaren anger "rättlösen" som lösenord<br>
**Så** är knappen Logga in inaktiverad<br><br>

**Scenario**: Inloggningen går inte att genomföra när lösenordet är felaktigt<br>
**Givet** att sidan har öppnats<br>
**Och** rubriken "Logga in" visas<br>
**När** användaren anger "augustw" som användarnamn<br>
**Och** användaren anger "fellösen" som lösenord<br>
**Så** är knappen Logga in inaktiverad<br>

**Scenario**: Användaren loggas in och dirigeras till startsidan<br>
**Givet** att sidan har öppnats<br>
**Och** rubriken "Logga in" visas<br>
**När** användaren anger "augustw" som användarnamn<br>
**Och** användaren anger "rättlösen" som lösenord<br>
**Och** användaren trycker på logga in<br>
**Så** dirigeras användaren till startsidan<br>


**Scenario**: Användaren ändrar inställningar och kontrollerar ändringarna i översikten<br>
**Givet** att användaren är inloggad<br>
**Och** rubriken "cypress-demo" visas<br>
**När** användaren anger färgen "#444444" som färg för "body"<br>
**Och** användaren anger färgen "#99FF99" som färg för "main"<br>
**Och** användaren anger rubriken "Hello //Cypress"<br>
**Och** användaren navigerar till "Översikt"<br>
**Så** färgprovet för "body" har färgen "#444444"<br>
**Och** färgprovet för "main" har färgen "#99ff99"<br>
**Och** rubriken "Hello //Cypress" visas
</code>

## Live-exempel på ovanstående scenarion
![Exempel på testfall](./docs/cypress-demo-2022.gif)

# Cypress

<ul>
    <li>Tillhandahåller GUI som kan användas lokalt vid tets. Går även att köra via cmd.</li>
    <li>Cypress ger otroligt tydliga loggar vilket underlättar felsökning även för den obevandrade testkodaren. Se illustration nedan.</li>
    <li>Möjlighet till screenshots och videos för att visualisera fel som en del i felsökning och testrapportering.</li>
    <li>Kan användas i CI-pipelines</li>
    <li>Testrapporter går att få i ex. formaten junit, json, html</li>
    <ul>
        <li>Finns även ett onlineverktyg för att hålla koll på dina testrapporter (Cypress Dashboard)</li>
    </ul>
</ul>

**Felutskrifter i Cypress-GUIt**
![Exempel på testfall](./docs/fel.png)