import { BaseElements } from './BaseElements.js';

export class Textbox extends BaseElements {
    constructor(page) {
        super(page); // Call the parent class constructor
    }

    async enterText(selector, text) {
        await this.page.locator(selector).fill(text);
        console.log(`Entered text "${text}" into element with selector: ${selector}`);
    }
}
