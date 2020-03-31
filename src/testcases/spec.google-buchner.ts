import { browser } from 'protractor';
import { GooglePage } from '../page-object-models/google-POM';

describe('Ein erster Beispieltest', () => {

   let suchText = "buchner und partner praxisbedarf";

   beforeEach(() => {
      browser.waitForAngularEnabled(false);
      GooglePage.get();
   });

   it('sollte den Standort von Buchner und Partner in Google Maps anzeigen', () => {
      GooglePage.showLocationOnMaps(suchText);
   });
});
