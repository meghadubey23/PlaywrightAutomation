import { BaseElements } from "./BaseElements";
import { expect } from "@playwright/test";


export class Checkbox extends BaseElements {
    constructor(page) {
        super(page); // Call the parent class constructor
    }

    async selectCheckbox(selector) {
        const checkbox = this.page.locator(selector); // No need to await here
        await checkbox.click(); // Await the check() method
    
        // Verify the checkbox is checked
        try {
            await expect(checkbox).toBeChecked();
            console.log(`Checkbox selected successfully.`);
        } catch (error) {
            console.error(`Failed to select checkbox: ${error}`);
        }
    }
    
}