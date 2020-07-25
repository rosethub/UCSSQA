let ucssLandingPage = require('../pages/landingPage/landingPage.js');
let jsonData = require('../pages/landingPage/data.json');
const testLog = require("../helpers/logger/log4jsConfig.js");

describe("UCSS landingPage", function(){

    testLog.level = "debug";
    testLog.debug("testLandingPage.js, entering");

    it('Verify UCSS landingPage text', function() {
        testLog.debug("testLandingPage.js, at Verify UCSS landingPage text");
        ucssLandingPage.get(jsonData.input.UCSSQA);

        var retTxt = ucssLandingPage.getLandingPageText();
        var expectedTxt = jsonData.expected.landingPageText;
        
        testLog.debug("testLandingPage.js, verify UCSS landingPage text, " + retTxt);
        testLog.debug("testLandingPage.js, verify UCSS landingPage text, " + expectedTxt);
        expect(retTxt).toContain(expectedTxt);
    });

    testLog.debug("testLandingPage.js, exiting");
});

