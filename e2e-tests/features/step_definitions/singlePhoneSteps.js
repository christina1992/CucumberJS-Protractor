'use strict';
var singlePhonePage = require('../pages/singlePhonePageObject');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = {

    go: function (site) {
        browser.get(site);
    },

    sendKeys: function (phoneName) {
        return singlePhonePage.getInputSearch().sendKeys(phoneName);
    },

    findSpecificPhone: function (phone) {
        browser.sleep(4000);
        return singlePhonePage.getPhoneTitle(phone);
    },
    checkSpec: function (spec, value) {
        browser.sleep(4000);

        if (spec === 'Internal Storage') {
            singlePhonePage.getInternalStorage().getText().then(function (storage) {
                return expect(storage).to.equal(value);
            });
        }
        else if (spec === 'RAM') {
            singlePhonePage.getRAM().getText().then(function (ram) {
                return expect(ram).to.equal(value);
            });
        } else if (spec === 'UI') {
            singlePhonePage.getUI().getText().then(function (ui) {
                return expect(ui).to.equal(value);
            });
        } else if (spec === 'OS Version') {
            singlePhonePage.getOSVersion().getText().then(function (os) {
                return expect(os).to.equal(value);
            });
        } else {
            return false;
        }
    }
};