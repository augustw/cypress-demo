# language: sv
Egenskap: Verifiera att inloggningen fungerar

Scenario: Inloggningen går inte att genomföra när användarnamnet är för långt
Givet att sidan har öppnats
Och rubriken "Logga in" visas
När användaren anger "august.wande" som användarnamn
Och användaren anger "rättlösen" som lösenord
Så är knappen Logga in inaktiverad

Scenario: Inloggningen går inte att genomföra när lösenordet är felaktigt
Givet att sidan har öppnats
Och rubriken "Logga in" visas
När användaren anger "augustw" som användarnamn
Och användaren anger "fellösen" som lösenord
Så är knappen Logga in inaktiverad


Scenario: Användaren loggas in och dirigeras till startsidan
Givet att sidan har öppnats
Och rubriken "Logga in" visas
När användaren anger "augustw" som användarnamn
Och användaren anger "rättlösen" som lösenord
Och användaren trycker på logga in
Så dirigeras användaren till startsidan