//an example configuration file.
exports.config = {

  directConnect: true,

  //capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',

    chromeOptions: {
      useAutomationExtension: false
    },
  },

  //framework to use. Jasmine is recommended.
  framework: 'jasmine',

  //spec patterns are relative to the current working directory when
  //protractor is called.
  //specs: ['../src/tests/testLandingpage.js'],
  specs: [
    '../src/tests/testLandingPage.js',
    "../src/tests/testLogin.js"
    //"../src/helper/end/end.js"
  ],

  //options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
