var angularPage = require('../pages/angularPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
    this.Given(/^I go to "([^"]*)"$/, function(site) {
        angularPage.go(site);
    });

    this.When(/^I add "([^"]*)" in the task field$/, function(task) {
        angularPage.addTask(task);
    });

    this.When(/^I click the add button$/, function() {
        angularPage.submitTask();
    });

    this.Then(/^I should see my new task in the list$/, function(callback) {
        var phoneList = element.all(by.repeater('phone in phones'));
        expect(phoneList.count()).to.eventually.equal(1)
        expect(phoneList.get(0).getText()).to.eventually.equal('Nexus')
            .and.notify(callback);
    });
};