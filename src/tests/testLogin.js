let ucssLoginPage = require('../pages/login/login.js');
let jsonData = require('../pages/login/data.json');
const testLog = require("../helpers/logger/log4jsConfig.js");


describe("UCSS login", function(){

    testLog.level = "debug";
    testLog.debug("testLogin.js, entering");

    it('Verify UCSS login text', function() {
        ucssLoginPage.landingPageLoginButton();
                
        var retTxt = ucssLoginPage.getLoginPageText();
        var expectedTxt = jsonData.expected.loginTxt;

        expect(retTxt).toContain(expectedTxt);
    });

    it('Verify UCSS login success', function() {
        ucssLoginPage.loginPageLoginButton();
                
        var retTxt = ucssLoginPage.getLAccountOverviewPageText();
        var expectedTxt = jsonData.expected.accountOverView;

        expect(retTxt).toContain(expectedTxt);
    });

    testLog.debug("testLogin.js, exiting");
});