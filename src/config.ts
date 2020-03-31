import { browser } from 'protractor';
let Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

exports.config = {
   directConnect: true,//<--remove this if you want to run firefox tests on Jenkins
   capabilities: {
      browserName: 'chrome'//<-- run EITHER chrome OR  firefox
      //browserName: 'firefox', marionette: true// <--these two settings enable tests on firefox
   },

   seleniumAddress: 'http://localhost:4444/wd/hub',// <--uncommend this line to run tests on your local webdriver   

   specs: ['.\\testcases\\spec.google-buchner.js'],
   framework: 'jasmine2',
   onPrepare: () => {
      browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
         new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
         })
      );//addReporter
   },//onPrepare
   jasmineNodeOpts: {
      showColors: true //use colors in the command line report.
   }
};
