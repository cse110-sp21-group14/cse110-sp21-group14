/**
 * @file Temporary test file for Puppeteer
 * @author: Group 14 (workflow)
 */
const puppeteer = require("puppeteer");
var browser;
var page;

describe("Puppeteer Test", () => {
    // route to page
    (async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();

        await page.goto("https://github.com/cse110-sp21-group14/cse110-sp21-group14");
    });

    // placeholder test 1
    ("Test1: Check for 404", async () => {
        let expected = "Find code, projects, and people on GitHub:";
        let actual = await page.$eval("label[for=not-found-search]", (e) => e.innerHTML);
        expect(actual).toBe(expected);
    });
});