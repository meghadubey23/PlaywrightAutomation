import { BaseElements } from "./BaseElements";
import { expect } from "@playwright/test";

export class StaticText extends BaseElements {
    constructor(page) {
        super(page);
    }

    async getTextFromMessage() {
        // Use the inherited `getText` method
        const text = await this.getText("[style*='block']");
        console.log(`Error message: ${text}`);
        return text;
    }

    async verifyErrorMessage() {
        const element = await this.getStaticElement("[style*='block']");
        const expectedText = "Incorrect username/password.";
        await expect(element).toHaveText(expectedText);
    }
} 