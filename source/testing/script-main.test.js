/**
 * Pupeteer Test for scripts/script-main.js
 * @author Stephen Montes De Oca
 */

const browserslist = require("browserslist");
const { Browser } = require("puppeteer");
const { after } = require("underscore");

const GOOGLE_USER = 'PuffNotesTester';
const GOOGLE_PWD = 'PowellPuffGang14';

//Puppeteer E2E tests for Main webpage
describe("Testing Main Webpage", () => {
    //Logs into Puff Notes and navigates to Main webpage.
    beforeAll(async () => {

        //Opens up website
        await page.goto("http://localhost:5000/");
        await page.waitForTimeout(500);
        const logInButton = await page.$('body > div > div > div.aunth > a');
        await logInButton.evaluate(logInButton => logInButton.click());
        const navigationPromise = page.waitForNavigation();
        await navigationPromise;

        //Enters Google username and password
        await page.waitForSelector('#identifierId');
        await page.type('#identifierId', GOOGLE_USER);
        await page.click("#identifierNext");
        await page.waitForSelector('input[type="password"]', { visible: true });
        await page.type('input[type="password"]', GOOGLE_PWD);
        await page.waitForSelector("#passwordNext", { visible: true });
        await page.click("#passwordNext");
        await navigationPromise;

        // Navigates to main and waits for load
        await page.waitForSelector('body > div > div.menuBar > ul > li:nth-child(1) > a');
        await page.click('body > div > div.menuBar > ul > li:nth-child(1) > a');
        await navigationPromise;
        await page.waitForTimeout(500);
    }, 150000);

    // testing if journal loaded from data base
    it("Test 1: Journals loaded from Database", async () => {
        const numEntries = await page.$$eval("div.journal-item", (entries) => {
            return entries.length;
        });

        expect(numEntries).toBe(3);
    });

    // test if pages are also there
    it("Test 2: Check Sidebar for Pages", async () =>{
        const pageTitle = await page.$eval('ul.journal-item-details > li > a', (a) =>{
            return a.innerText;
        });

        expect(pageTitle).toBe('Page 1 Journal 1');
    });

    // testing daily search
    it("Test 3: Daily Search", async () => {
        await page.waitForSelector("#monthSearch");
        await page.type("#monthSearch","6");
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press("2");
        await page.keyboard.press("0");
        await page.keyboard.press("2");
        await page.keyboard.press("1");
        await page.keyboard.press("Enter");

        await page.waitForTimeout(1000);
        
    }, 7000);

    // Test to see if content is loaded from the database
    it("Test 4: Daily Editor", async () => {
        await page.click('[id="6/3/2021"] > button > a');
        await page.waitForTimeout(3000);
        
        await page.waitForSelector("section.layerThree");
        
        let dailyTitle = await page.$eval('[id="title"]',(el) => {
            return el.value;
        });

        expect(dailyTitle).toBe("Daily for June 3");
        
    }, 50000);

    // Test to see if the save button works
    it("Test 5: Saving Content", async () => {
        await page.click("button.saveButton");
        await page.waitForTimeout(3000);

        await page.waitForSelector("div.ce-paragraph.cdx-block");

        let dailyContent = await page.$eval("div.ce-paragraph.cdx-block", (el) => {
            return el.innerText;
        });

        expect(dailyContent).toBe("This is just to test the editor with puppeteer!");
    }, 10000);

    // Test to see if daily entries button redirects to main
    it("Test 6: Clicking button for daily entries", async () => {
        const navigationPromise = page.waitForNavigation();
        await page.click("button > a");
        await navigationPromise;

        let url = await page.url();

        expect(url).toBe("http://localhost:5000/main");
    }, 10000);

    // Adding a new Daily
    it("Test 7: Adding a new Daily", async () => {
        // searching in form
        await page.waitForSelector("#monthSearch");
        await page.type("#monthSearch", "6");
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press("2");
        await page.keyboard.press("0");
        await page.keyboard.press("2");
        await page.keyboard.press("1");
        await page.keyboard.press("Enter");
        
        // waiting for page to load dailies for june 2021
        await page.waitForTimeout(1000);

        // clicking add button
        await page.click('[id="6/1/2021"] > button > a');
        await page.waitForTimeout(3000);

        await page.waitForSelector("section.layerThree");

        // typing name for daily
        await page.type("#title", "Test Daily");

        // clicking add button
        await page.click("button.addButton");
        await page.waitForTimeout(3000);
    }, 15000);

    // Checking if redirected to editor for that daily
    it("Test 8: Redirects newly added Daily to Edit page", async () => {
        // checking if editor loaded save properly
        await page.waitForSelector("section.layerThree");

        let dailyTitle = await page.$eval('[id="title"]', (el) => {
            return el.value;
        });

        // going back to main
        const navigationPromise = page.waitForNavigation();
        await page.click("button > a");
        await navigationPromise;

        expect(dailyTitle).toBe("Test Daily");
    }, 15000);

    // Checking if page exists to delete
    it("Test 9: Deleting page", async () => {
        // searching in form
        await page.waitForSelector("#monthSearch");
        await page.type("#monthSearch", "6");
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press("2");
        await page.keyboard.press("0");
        await page.keyboard.press("2");
        await page.keyboard.press("1");
        await page.keyboard.press("Enter");

        // waiting for page to load dailies for june 2021
        await page.waitForTimeout(2000);

        // deleting daily for june 1st
        const navigationPromise = page.waitForNavigation();
        await page.click('[id="dailyContainer"] > li > button:nth-child(3)');
        await navigationPromise;

        // searching in form again
        await page.waitForSelector("#monthSearch");
        await page.type("#monthSearch", "6");
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press("2");
        await page.keyboard.press("0");
        await page.keyboard.press("2");
        await page.keyboard.press("1");
        await page.keyboard.press("Enter");

        // waiting for page to load dailies for june 2021
        await page.waitForTimeout(2000);

        // checking if button says add vs delete
        let btnText = await page.$eval('[id="dailyContainer"] > li > button:nth-child(2)', (el) => {
            return el.innerText;
        });

        expect(btnText).toBe("Add");
    }, 15000);

    // Test adding journal
    it("Test 10: Add Journal", async () => {
        await page.click('button.buttonAdd:nth-child(3) > a');
        await page.waitForSelector('[id="title"]');

        const navigationPromise = page.waitForNavigation();
        await page.type('#title', 'Test Journal 4');
        await page.click('input.add');
        await navigationPromise;

        const journals = await page.$$eval("div.journal-item", (entries) => {
            return entries.length;
        });

        expect(journals).toBe(4);
    }, 15000);

    // Test add page
    it("Test 11: Add Page", async () => {;
        await page.click('div.journal-item:nth-child(7) > [id="pageButtons"] > div.pageButtons-item:nth-child(1) > button > a');

        await page.waitForSelector('[id="title"]');
        await page.type('#title', 'Page 1 Journal 4');

        await page.click("button.addButton");
        await page.waitForTimeout(3000);

        const pages = await page.$$eval('div.journal-item:nth-child(7) > ul > li > ul.journal-item-details', (entries) => {
            return entries.length;
        });

        expect(pages).toBe(1);
    }, 15000);

    // Delete page
    it("Test 12: Delete Page", async () => {
        const navigationPromise = page.waitForNavigation();
        await page.click('div.journal-item:nth-child(7) > ul > li > ul.journal-item-details > li:nth-child(2) > form > button');
        await navigationPromise;

        let url = await page.url();

        expect(url).toBe("http://localhost:5000/main");
    }, 15000);

    // Check page gone
    it("Test 13: Check Page is gone", async () => {
        const pages = await page.$$eval('div.journal-item:nth-child(7) > ul > li > ul.journal-item-details', (entries) => {
            return entries.length;
        });

        expect(pages).toBe(0);
    }, 15000);

    // Delete journal
    it("Test 14: Delete Journal", async () => {
        const navigationPromise = page.waitForNavigation();
        await page.click('div.journal-item:nth-child(7) > [id="pageButtons"] > div.pageButtons-item:nth-child(2) > form > button');
        await navigationPromise;

        const journals = await page.$$eval("div.journal-item", (entries) => {
            return entries.length;
        });

        expect(journals).toBe(3);
    }, 15000);

    // Test to see if content is loaded from the database 
    it("Test 15: Edit Journal", async () => {
        await page.click('ul.journal-item-details > li > a');
        await page.waitForTimeout(3000);
        
        await page.waitForSelector("#title");
        
        let pageTitle = await page.$eval('[id="title"]',(el) => {
            return el.value;
        });

        expect(pageTitle).toBe("Page 1 Journal 1");
    }, 15000);
});
