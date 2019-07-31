const assert = require('assert');
const allureReporter = require('@wdio/allure-reporter').default;

describe('webdriver.io page', () => {

    it('get token', () => {
        //browser.url('https://hr-dev.bekitzur.com/api/users/login');
        //console.log(browser);
    });

    it('should have the right title', () => {

        allureReporter.addFeature('Feature Title');

        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');

        const link = $('=WebdriverIO');
        //console.log(link.getText());
        assert.strictEqual(link.getText(), 'WebdriverIO');

        assert.strictEqual( $('h2').getText(), 'WebdriverIO');

    });

});
