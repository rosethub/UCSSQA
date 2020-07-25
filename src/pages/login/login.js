let jsonData = require('../login/data.json');

let loginPage = function(){

    var elementLandingPageLoginBtnTxt = element(by.buttonText(jsonData.tag.landingPageLoginBtnTxt));
    var elementLoginPageCss = element(by.css(jsonData.tag.loginPageCss, jsonData.expected.loginTxt));
    var elementLoginPageUserNameId = element(by.id(jsonData.tag.loginPageUserNameId));
    var elementLoginPagePasswordXpath = element(by.xpath(jsonData.tag.loginPagePasswordXpath));
    var elementLoginPageLoginBtnTxt = element(by.buttonText(jsonData.tag.loginPageLoginBtnTxt));
    var elementAccountOverviewPageCss = element(by.cssContainingText(jsonData.tag.accountOverviewPageCss, jsonData.tag.accountOverviewPageCssTxt));

    this.landingPageLoginButton = function(){

        elementLandingPageLoginBtnTxt.click();
        browser.sleep(5000);
    };
    
    this.getLoginPageText = function(){

        var retTxt = elementLoginPageCss.getText();

        return retTxt;
    };

    this.loginPageLoginButton = function(){
        //enter username
        elementLoginPageUserNameId.sendKeys(jsonData.input.userame);

        browser.sleep(3000);
        
        //enter password
        elementLoginPagePasswordXpath.sendKeys(jsonData.input.password);

        browser.sleep(3000);

        elementLoginPageLoginBtnTxt.click();

        browser.sleep(5000);
    };
    
    this.getLAccountOverviewPageText = function(){

        var retTxt =  elementAccountOverviewPageCss.getText();
        
        browser.sleep(3000);

        return retTxt;
    };
};

module.exports = new loginPage();