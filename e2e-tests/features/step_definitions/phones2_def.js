var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

    this.Given(/^I go to "([^"]*)"$/, function (site) {
        // Write code here that turns the phrase above into concrete actions
        browser.get(site);
    });

    this.When(/^I add "([^"]*)" in the search field$/, function (phoneName) {

        element(by.model('$ctrl.query')).sendKeys(phoneName);

    });

    this.Then(/^I the second phone title should be "([^"]*)"$/, function (phoneTitle) {
        var index = 0;
        var allElements = element.all(by.repeater('phone in $ctrl.phones'));
        expect(allElements.get(1).getText()).to.eventually.equal("MOTOROLA XOOM™\nThe Next, Next Generation Experience the future with MOTOROLA XOOM, the world\'s first tablet powered by Android 3.0 (Honeycomb).")
    });

    this.Then(/^I change the filter to alphabeticle$/, function () {
        var select = element(by.model('$ctrl.orderProp'));
        select.$('[value="name"]').click();

    });

    this.Then(/^the title of the second phone should be "([^"]*)"$/, function (phoneTitle) {
        var index = 0;
        var allElements = element.all(by.repeater('phone in $ctrl.phones'));

        expect(allElements.get(1).getText()).to.eventually.equal('DROID™ Pro by Motorola\nThe next generation of DOES.')

    });

}