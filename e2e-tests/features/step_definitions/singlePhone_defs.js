var singlePageSteps = require('../step_definitions/singlePhoneSteps');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function () {
    this.Given(/^user goes to "([^"]*)"$/, function (site) {
        singlePageSteps.go(site);
    });

    this.When(/^user adds "([^"]*)" in the search field$/, function (phoneName) {
        singlePageSteps.sendKeys(phoneName);
    });

    this.When(/^user selects the phone with title "([^"]*)"$/, function (phoneTitle) {
        singlePageSteps.findSpecificPhone(phoneTitle).click();
    });

    this.Then(/^user sees that the qualifications for that phone are the following$/, function (table) {
        table.hashes().forEach(elem => {
            browser.sleep(2000);
            singlePageSteps.checkSpec(elem.Spec,elem.Value);
            browser.sleep(2000);
        });
    });

};