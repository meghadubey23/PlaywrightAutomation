import { BaseElements } from "./BaseElements";
import { expect } from "@playwright/test";

export class Dropdown extends BaseElements{
    constructor(page) {
        super(page); // Call the parent class constructor
    }

    async selectValue(selector, value) {
        const dropd = await this.page.locator(selector);
        dropd.selectOption(value);
        // Verify that the option is selected from the dropdown
        try {
            await expect(dropd).toHaveValue(value)
            console.log(`Select Dropdown : '${dropd.textContent()}'`)
        } catch (error) {
            console.error(`Failed to select Dropdown: ${error}`);
        }
    }
}