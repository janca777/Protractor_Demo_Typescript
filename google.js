function Google() {
   this.searchInput = element(by.name('q'));
   this.mapsLink = element(by.xpath("//a[contains(text(),'Maps')]"));
   this.getURL = function () {
      browser.get('https://www.google.de/')
   };
};

module.exports = new Google();