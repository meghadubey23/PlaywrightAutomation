const { expect } = require("@playwright/test"); //test annotation
const assert = require('assert');

export class AssertiosnUtils {
    constructor(page) {
        this.page = page;
    }

    async asserTitle(page, url, text) {
        await page.goto(url)
        console.log(`Asset tile: "${await page.title()}"`);
        await expect(page).toHaveTitle(text);
    }

    async asserText(expectedText, actualText){
        assert.strictEqual(actualText, expectedText, 'Texts do not match');
    }
}