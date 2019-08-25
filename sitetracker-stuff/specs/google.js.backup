const assert = require('assert');

describe('Google homepage', () => {
    it('should display the correct homepage title', async () => {
        await browser.url('http://google.com');
        const title = await browser.getTitle();
        assert.equal(title, 'Google');
    });
});