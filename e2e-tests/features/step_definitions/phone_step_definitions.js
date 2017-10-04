var phonePageObject = require('../pages/phoneListObject');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

    this.Given(/^I go to "([^"]*)"$/, function (site) {
        phonePageObject.go(site);
    });

    this.When(/^I add "([^"]*)" in the search field$/, function (searchedPhone) {
        phonePageObject.searchPhone(searchedPhone);
    });


    this.Then(/^I should see my phone in the list$/, function () {
        var phoneList = phonePageObject.phoneListPage.phoneList;
        expect(phoneList.count()).to.eventually.equal(1);
        var myElement = phonePageObject.phoneListPage.myElement;
        chai.expect('Nexus S', myElement);
    });


};