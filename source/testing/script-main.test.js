/**
 * Pupeteer Test for scripts/script-main.js
 * @author Stephen Montes De Oca
 */

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
    }, 15000);

    // testing if journal loaded from data base
    it("Test 1: Journals loaded from Database", async () => {
        const numEntries = await page.$$eval("div.journal-item", (entries) => {
            return entries.length;
        });

        expect(numEntries).toBe(3);
    });

    // TODO: test if pages are also there

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
        await page.evaluate(async () => {
            let li = document.getElementById("6/3/2021");
            li.children[1].firstElementChild.click();
        });
    }, 7000);

    // Test to see if content is loaded from the database
    it("Test 4: Daily Editor", async () => {
        await page.waitForSelector("#layerThree");
        let dailyTitle = await page.$eval('input[name="title"]',(el) => {
            console.log(el);
            return el;
        });

        expect(dailyTitle).toBe("Daily for June 3");
    }, 5000);

    // Test to see if the save button works
});
