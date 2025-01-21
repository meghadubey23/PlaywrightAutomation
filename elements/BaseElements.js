import { selectors } from "@playwright/test";

export class BaseElements {
    constructor(page) {
        this.page = page; // Store the Playwright page object
    }

    async clickElement(selector) {
        await this.page.locator(selector).click();
        console.log(`Clicked element with selector: '${selector}'`);
    }

    async getText(selector) {
        const locator = await this.getStaticElement(selector);
        const text = await locator.textContent();
        return text?.trim(); // Trim to remove unwanted spaces
    }

    async getStaticElement(selector){
        return this.page.locator(selector);
    }
}
