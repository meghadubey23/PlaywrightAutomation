const { test, expect } = require("@playwright/test"); //test annotation
import { LoginPage } from "../pages/LoginPage";

test("Browser context Test Case", async ({ browser }) => {
    //{} = fixture
    //browser = global browser variable
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

});

test("Login Page Negative Test Case", async ({ page }) => {
    const login = new LoginPage(page);
    const dict = {
        url: "https://rahulshettyacademy.com/loginpagePractise/",
        title: "LoginPage Practise | Rahul Shetty Academy",
        username: "Megha",
        password: "Hello",
        submit: true,
        errorMessage: true
    };
    await login.enterInfo(dict);
});

test("Login Page Positive Test Case", async ({ page }) => {
    const login = new LoginPage(page);
    const dict = {
        url: "https://rahulshettyacademy.com/loginpagePractise/",
        title: "LoginPage Practise | Rahul Shetty Academy",
        username: "rahulshettyacademy",
        password: "learning",
        submit: true,
        errorMessage: false
    };
    await login.enterInfo(dict);
});

test('@Web Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
  
 })