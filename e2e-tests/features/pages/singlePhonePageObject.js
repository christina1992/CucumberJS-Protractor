'use strict';
module.exports = {
    phoneListPage: {
        inputSearch: element(by.className('searchButton')),
        phoneList: element.all(by.repeater('phone in $ctrl.phones')),
        phoneTitle: element(by.id('phone.name')),
        InternalStorage : element(by.className('internalStorage')),
        RAM : element(by.className('RAM')),
        UI: element(by.className('UI')),
        OSVersion : element(by.className('OSVersion'))
    },

    getInputSearch: function () {
        return this.phoneListPage.inputSearch;
    },

    getPhoneList: function () {
        return this.phoneListPage.phoneList;
    },

    getPhoneTitle: function (phoneName) {
        return element(by.id(phoneName));
    },

    getInternalStorage: function () {
        return this.phoneListPage.InternalStorage;
    },
    getRAM: function () {
        return this.phoneListPage.RAM;
    },
    getUI: function () {
        return this.phoneListPage.UI;
    },
    getOSVersion: function () {
        return this.phoneListPage.OSVersion;
    },


};