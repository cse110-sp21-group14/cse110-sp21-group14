/**
 * @file Puppeteer Tests for scripts/script-calendar.js
 * @author Michael Mao
 */

//Constant variables used for testing
const GOOGLE_USER = 'PuffNotesTester';
const GOOGLE_PWD = 'PowellPuffGang14';
const MONTHS = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
const URL = "http://localhost:5000/main/daily/60bc1482340ef13674a421f6";

//Puppeteer E2E tests for calendar webpage
describe("Testing Calendar Webpage", () => {
    //Logs into Puff Notes and navigates to Calendar webpage.
    beforeAll(async () => {

        //Opens up PuffNotes website
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
    }, 30000);

    //Checks the displayed month on our Calendar upon loading in
    it("Check if default month is the current month", async () => {
        //Converts current Date object into string
        const curDate = new Date();
        const curMonth = curDate.getMonth();
        const curYear = curDate.getFullYear();
        const expectedDate = MONTHS[curMonth] + ", " + curYear;

        //Check if the current month is the same as the displayed month
        await page.waitForSelector(".today");
        const pageDate = await page.$eval(".today", element => {
            return element.innerHTML;
        });
        expect(pageDate).toBe(expectedDate);
    }, 10000);

    //This test takes us to the previous month relative to the current month
    it("Check if previous month button works", async () => {
        //Converts current Date object into string
        const curDate = new Date();
        const curMonth = curDate.getMonth() - 1;
        const curYear = curDate.getFullYear();
        const expectedDate = MONTHS[curMonth] + ", " + curYear;

        //Click previous month button
        const button = await page.$("#calendar > div > div > div.cld-rwd.cld-nav");
        await button.evaluate(button => button.click());
        await page.waitForTimeout(1000);

        //Test if the displayed month is the previous month
        const pageDate = await page.$eval(".today", (element) => {
            return element.innerHTML;
        });
        expect(pageDate).toBe(expectedDate);
    }, 10000);

    //This test brings us back to the current month
    it("Check if next month button works", async () => {
        //Converts current Date object into string
        const curDate = new Date();
        const curMonth = curDate.getMonth();
        const curYear = curDate.getFullYear();
        const expectedDate = MONTHS[curMonth] + ", " + curYear;

        //Click next month button
        await page.evaluate(() => {
            document.querySelector("#calendar > div > div > div.cld-fwd.cld-nav").click();
        });
        await page.waitForTimeout(1000);

        //test if the displayed month is the current month
        const pageDate = await page.$eval(".today", (element) => {
            return element.innerHTML;
        });
        expect(pageDate).toBe(expectedDate);
    }, 10000);

    /*
        Checks the displayed title for a specific test daily. This test will 
        navigate to June 2021. Test other calendar functionality beforehand.
     */
    it("Check if daily title is correct", async () => {
        const curDate = new Date();
        const desiredDate = new Date(2021, 5);

        //If current month is before the test daily navigate forwards
        while (desiredDate.getFullYear() > curDate.getFullYear() || 
            (desiredDate.getFullYear() == curDate.getFullYear() && 
            desiredDate.getMonth() > curDate.getMonth())) {
            //Click the next month button until we reach June 2021
            await page.evaluate(() => {
                document.querySelector("#calendar > div > div > div.cld-fwd.cld-nav").click();
            });
            await page.waitForTimeout(500);
            curDate.setMonth(curDate.getMonth() + 1);
        }

        //If the current month is after the test daily navigate backwards
        while (desiredDate.getFullYear() < curDate.getFullYear() || 
        (desiredDate.getFullYear() == curDate.getFullYear() && 
        desiredDate.getMonth() < curDate.getMonth())) {
            //Click the previous month button until we reach June 2021
            await page.evaluate(() => {
                document.querySelector("#calendar > div > div > div.cld-rwd.cld-nav").click();
            });
            await page.waitForTimeout(500);
            curDate.setMonth(curDate.getMonth() - 1);
        }

        //Tests the title of the June 3 2021 daily displayed in the calendar
        await page.waitForSelector("#calendar > div > ul.cld-days > li.cld-day.currMonth.eventday > p > span > a");
        const dailyBox = await page.$("#calendar > div > ul.cld-days > li.cld-day.currMonth.eventday > p > span > a");
        const dailyTitle = await dailyBox.evaluate(button => button.innerHTML);
        expect(dailyTitle).toBe("Daily for June 3");
    }, 20000);

    //This test navigates away from calendar to a daily and should be run last
    it("Check if clicking a date opens the daily", async () => {
        //await page.waitForTimeout(1000);
        //Clicks the June 3 2021 daily link in our calendar
        await page.waitForSelector("#calendar > div > ul.cld-days > li.cld-day.currMonth.eventday > p > span > a");
        const button = await page.$("#calendar > div > ul.cld-days > li.cld-day.currMonth.eventday > p > span > a");
        await button.evaluate(button => button.click());

        //Makes sure daily page fully loads
        await page.waitForTimeout(500);
        await page.waitForSelector("body > div.container > div.viewarea > h1");

        //Checks if the daily url is correct
        const dailyUrl = await page.url();
        expect(dailyUrl).toBe(URL);
    }, 10000);

});
