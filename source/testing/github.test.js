/**
 * @file Temporary test file for Puppeteer
 * @author: Group 14 (workflow)
 */

/* global describe, beforeAll, it, $ */
const puppeteer = require("puppeteer");
var browser;
var page;

describe("Puppeteer Test", () => {
    // route to page
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();

        await page.goto("https://github.com/cse110-sp21-group14/cse110-sp21-group14");
    });

    // placeholder test 1
    it("Test1: Check for 404", async () => {
        let expected = "Find code, projects, and people on GitHub:";
        let actual = await page.$eval("label[for=not-found-search]", (e) => e.innerHTML);
        expect(actual).toBe(expected);
    });

    // placeholder test 2
    it("Test2: Clicking GitHub icon, new URL should be https://github.com/", async () => {
        await page.click("img[alt=GitHub]");
        expect(page.url()).toMatch("https://github.com/");
        browser.close();
    });
});