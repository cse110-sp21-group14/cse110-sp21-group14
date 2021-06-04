/**
 * Puppeteer Tests for scripts/script-calendar.js
 * @author Michael Mao
 */

const GOOGLE_USER = 'PuffNotesTester';
const GOOGLE_PWD = 'PowellPuffGang14';
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Puppeteer E2E tests for calendar webpage
describe("Testing Calendar Webpage", () => {
    //Logs into Puff Notes and navigates to Calendar webpage.
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

        //Navigates to Calendar View
        await page.waitForSelector('body > div > div.menuBar > ul > li:nth-child(2) > a');
        await page.click('body > div > div.menuBar > ul > li:nth-child(2) > a');
        await navigationPromise;
        await page.waitForTimeout(500);
    }, (10000));

    it("Check if default month is the current month", async () => {
        const curDate = new Date();
        const curMonth = curDate.getMonth();
        const curYear = curDate.getFullYear();
        const expectedDate = MONTHS[curMonth] + ", " + curYear;
        const pageDate = await page.$eval(".today", (element) => {
            return element.innerHTML;
        });
        expect(pageDate).toBe(expectedDate);
    });

});
