/**
 * Pupeteer Test for middleware/auth.js
 * @author Nathaniel Wong
 */
/* global describe, beforeAll, it, page */

const GOOGLE_USER = 'PuffNotesTester';
const GOOGLE_PWD = 'PowellPuffGang14';

//Puppeteer E2E tests for Middleware
describe("Testing MiddleWare", () => {
    //Logs into Puff Notes and navigates to Main webpage.
    beforeAll(async () => {

        //Opens up PuffNotes website
        await page.goto("https://journalcse110.herokuapp.com/");
        await page.waitForTimeout(500);
        const logInButton = await page.$("body > div > div > div.aunth > a");
        await logInButton.evaluate(logInButton => logInButton.click());
        const navigationPromise = page.waitForNavigation();
        await navigationPromise;

        //Enters Google username and password
        await page.waitForSelector("#identifierId");
        await page.type("#identifierId", GOOGLE_USER);
        await page.click("#identifierNext");
        await page.waitForSelector("input[type=\"password\"]", { visible: true });
        await page.type("input[type=\"password\"]", GOOGLE_PWD);
        await page.waitForSelector("#passwordNext", { visible: true });
        await page.click("#passwordNext");
        await navigationPromise;

        //Navigates to Calendar View
        await page.waitForSelector("body > div > div.menuBar > ul > li:nth-child(2) > a");
        await page.click("body > div > div.menuBar > ul > li:nth-child(2) > a");
        await navigationPromise;
    }, 150000);

    it("Check if the page loads correctly when logged in", async () => {
        try{
            await page.goto("http://journalcse110.herokuapp.com/main/page/60bbed535536ba3c24962740", {timeout:10000});
            await page.waitForSelector("div.ce-paragraph.cdx-block");
        } catch (err){
            console.error(err.message);
        }
        let expected = "This is just to test the editor with puppeteer!";
        let actual = await page.$eval("div.ce-paragraph.cdx-block", (e1) => {
            return e1.innerText;
        });

        expect(expected).toBe(actual);
    });

    if("Check to make sure page doesn't load when not logged in", async () => {
        await page.waitForSelector("body > div > div.menuBar > ul > li:nth-child(4) > a");
        await page.click("body > div > div.menuBar > ul > li:nth-child(4) > a");
        await page.goto("http://journalcse110.herokuapp.com/main/page/60bbed535536ba3c24962740");
        await page.waitForTimeout(5000);

        let expected = "http://journalcse110.herokuapp.com/";
        let actual = await page.url();
        expect(expected).toBe(actual);
    });
});