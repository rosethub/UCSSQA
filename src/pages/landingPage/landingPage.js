let jsonData = require('./data.json');
const testLog = require("../../helpers/logger/log4jsConfig.js");

let landingPage = function(){

    testLog.level = "debug";
    testLog.debug("landingPage.js, at function(), entering landingPage"); 

    var elementLandingPageText = element(by.css(jsonData.tag.landingPageCSS));
    
    this.get = function(url){
        testLog.debug("landingPage.js, function(), at get(url)"); 
        browser.get(url);
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
    };

    this.getLandingPageText = function(){
        testLog.debug("landingPage.js, function(), at getLandingPageText()");
        var text = elementLandingPageText.getText();
        
        testLog.debug("landingPage.js, function(), at getLandingPageText(), " + text);
        return text;
    };

    testLog.debug("landingPage.js, at function(), exiting landingPage"); 
};

module.exports = new landingPage();