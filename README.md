# protractor-typescript-test #
Eine Testsuite zur Demonstration einer Browserautomation mit den Frameworks Selenium Protractor + Jasmine. Ausgeführt wird eine Google-Suche nach einem Standort. Dieser wird in Google Maps angezeigt.

Diese Version wurde nach dem "Page-Object-Model"-Pattern in Typescript erstellt; dadurch wird der Test (definiert in 'spec.google-buchner.ts') aufgeräumter und leserlicher.

# Installation #

Projekt-Ordner öffnen und dann folgende Befehle im Terminal eingeben:
1. npm install <-- Installation aller Module
2. npm run start <-- startet den Silenium-Server, auf dem die Tests ausgeführt werden
3. npm run test <-- startet den Test, nachdem die Typescript-Dateien (im 'src'-Folder) automatisch in Javascript-Dateien (im 'build'-Folder) konvertiert wurden.

# Wechseln des Browsers für Firefox-Tests #

Folgende Zeilen in der Datei 'config.ts' auskommentieren bzw. entfernen
- Zeile 5: [directConnect: true,]
- Zeile 7: [browserName: 'chrome']

Danach in der Datei 'config.ts' Zeile 8 aktivieren:
[browserName: 'firefox', marionette: true]
