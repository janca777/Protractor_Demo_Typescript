//all methods in the class are static, so they can be called without instaciation
import { browser, element, by, ExpectedConditions, Key } from 'protractor';

export class GooglePage {

   private static txtSearch = element(by.name('q'));
   private static linkMaps = element(by.xpath("//a[contains(text(),'Maps')]"));

   static get(): GooglePage {
      browser.get('https://www.google.de/');
      return this;
   }//end get

   //gibt im Google-Suchfeld einen Text (der Paraeter) ein, und bestaetigt mit 'enter'
   static search(text: string) {
      this.txtSearch.sendKeys(text, Key.ENTER);
   }//end search

   //Sucht nach dem Parameter aug foofle.de, und klickt auf den Link 'Maps', um den Standort des
   //Suchbegriss anzuzeigen
   static showLocationOnMaps(text: string) {
      this.search(text);
      browser.wait(ExpectedConditions.elementToBeClickable(this.linkMaps), 10000);
      this.linkMaps.click().then(function () {
         browser.sleep(4500);
      });
   }//end showLocationOnMaps
};//end class

