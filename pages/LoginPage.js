import { AssertiosnUtils } from "../utility/AssertionsUtils";
import { Textbox } from "../elements/Textbox";
import { StaticText } from "../elements/Static";
import { expect } from "@playwright/test";
import { RadioButton } from "../elements/RadioButton";
import { Dropdown } from "../elements/Dropdown";
import { Checkbox } from "../elements/Checkbox";
import { BaseElements } from "../elements/BaseElements";

export class LoginPage {
    constructor(page) {
        this.page = page; // Store the Playwright page object
        this.baseelements = new BaseElements(page);
        this.assertions = new AssertiosnUtils(page);
        this.textbox = new Textbox(page); // Initialize the Textbox instance
        this.static = new StaticText(page);
        this.radio = new RadioButton(page);
        this.dropdown = new Dropdown(page);
        this.checkbox = new Checkbox(page);
    }

    async enterInfo(params = {}) {
        // Validate that params have at least 5 elements
        if (params.length < 5) {
            throw new Error('Insufficient parameters. Expected at least 5 elements.');
        }

        //Login -----
        // Assert page title
        await this.assertions.asserTitle(this.page, params.url, params.title);

        // Enter username
        await this.textbox.enterText('#username', params.username);

        // Enter password
        await this.textbox.enterText('[type="password"]', params.password);

        // Select user radio button
        await this.radio.selectRadio('//span[normalize-space()="User"]');

        // Select Okay button
        await this.baseelements.clickElement('#okayBtn');

        // Select Dropdown
        await this.dropdown.selectValue("select.form-control", "stud");

        // Select terms checkbox
        await this.checkbox.selectCheckbox('#terms');

        // Click submit button if fifth parameter is truthy
        if (params.submit) {
            await this.baseelements.clickElement('#signInBtn');
        }
        // -----

        //Verify if error message is expected: Option1
        // const message = await this.static.getTextFromMessage();
        // await this.assertions.asserText("Incorrect username/password.", message);

        //Verify if error message is expected: Option2
        if(params.errorMessage){
            await this.static.verifyErrorMessage();
        } else {
            await expect(this.page).toHaveTitle("ProtoCommerce");
            console.log('Home page has title: "ProtoCommerce"')
        }

        // Get the item texts --
        const items = await this.static.getStaticElement(".card-body a");
        let text = await items.first().textContent();
        console.log(`firstItem: '${text}'`);

        text = await items.nth(1).textContent();
        console.log(`secondItem: '${text}'`);

        text = await items.last().textContent();
        console.log(`lastItem: '${text}'`);
        // --

        await this.page.waitForLoadState("networkidle");

        // Get all the title of the items together
        const allTitle = await items.allTextContents();
        console.log(allTitle);
    }
}
