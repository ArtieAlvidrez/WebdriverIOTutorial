import SPage from '../pageobjects/salesforce.page';
const assert = require('assert');

describe('google page', () => {
    it('should have the right title', async() =>{
        SPage.open('http://formy-project.herokuapp.com/keypress');
//		browser.url ('http://formy-project.herokuapp.com/keypress');
		await browser.pause (10000);
//		await SPage.waitForPageToLoad ();
		const title = await browser.getTitle();
		console.log (title);
        expect(title).toContain('Formy');


		await SPage.enterName ("artie alvidrez");
//		SPage.clickButton();
    });
});