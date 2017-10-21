'use strict';
module.exports = {
    phoneListPage: {
        inputSearch: element(by.xpath('/html/body/div/div/phone-list/div/div/div[1]/p[1]/input')),
        phoneList: element.all(by.repeater('phone in $ctrl.phones')),
        myElement: element(by.xpath('/html/body/div/div/phone-list/div/div/div[2]/ul/li/a[2]'))
    },
    go: function (site) {
        browser.get(site);
    },

    getSearchPhone: function () {

        this.phoneListPage.inputSearch;
    }
};