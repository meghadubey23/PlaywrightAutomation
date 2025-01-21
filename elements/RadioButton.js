import { BaseElements } from "./BaseElements";
import { expect } from "@playwright/test";

export class RadioButton extends BaseElements {
    constructor(page) {
        super(page); // Call the parent class constructor
    }

    async selectRadio(selector) {
        const radioButton = await this.page.locator(selector);
        await radioButton.check();
        // Verify that the radio button is checked
        try {
            await expect(radioButton).toBeChecked();
            console.log(`Select radio : '${radioButton.textContent()}'`)
        } catch (error) {
            console.error(`Failed to select radio: ${error}`);
        }
    }
}