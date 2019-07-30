const assert = require('assert');

describe('webdriver.io page', () => {

    it('should have the right title', () => {

        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');

        const link = $('=WebdriverIO');
        //console.log(link.getText());
        assert.strictEqual(link.getText(), 'WebdriverIO');

        assert.strictEqual( $('h2').getText(), 'WebdriverIO');

    });

});
