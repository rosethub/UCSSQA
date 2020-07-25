let jsonData = require('./data.json');


let logoutPage = function(){

    var elementLogoutPageCss = element(by.cssContainingText(jsonData.tag.logoutPageCss, jsonData.tag.logoutPageLoginBtnTxt));
    
    this.logout = function(){
        browser.sleep(3000);       
        elementLogoutPageCss.click();
        browser.sleep(3000);
    };
};

module.exports = new logoutPage();