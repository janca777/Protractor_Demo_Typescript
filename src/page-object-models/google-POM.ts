//all methods in the class are static, so they can be called without instanciation
import { browser, element, by, ExpectedConditions, Key } from 'protractor';

export class GooglePage {

   private static txtSearch = element(by.name('q'));
   private static linkMaps = element(by.xpath("//a[contains(text(),'Maps')]"));

   static get(): GooglePage {
      browser.get('https://www.google.de/');
      return this;
   }//end get

   //gibt im Google-Suchfeld einen Text (den Parameter) ein, und bestätigt mit 'enter'
   static search(text: string) {
      this.txtSearch.sendKeys(text, Key.ENTER);
   }//end search

   //Sucht nach dem Parameter auf google.de, und klickt auf den Link 'Maps', um den Standort des
   //Suchbegriffs anzuzeigen
   static showLocationOnMaps(text: string) {
      this.search(text);
      browser.wait(ExpectedConditions.elementToBeClickable(this.linkMaps), 10000);
      this.linkMaps.click().then(function () {
         browser.sleep(4500);
      });
   }//end showLocationOnMaps
};//end class

