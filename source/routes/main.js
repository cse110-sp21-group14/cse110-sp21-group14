/**
 * @file This script runs on the back end (server) to route the main page + handlebars
 * @author Group 14 (Back End)
 */
const express = require("express");

const secret = require("../config/secret");
const Journal = require("../models/Journal");
const Page = require("../models/Page");
const Daily = require("../models/Daily");

const router = express.Router();

const { ensureAuth } = require("../middleware/auth");

const { getDecryptedJournals, getDecryptedJournal, getDecryptedPage } = require("../config/decrypt");


/**
 * Responds with a list of all journals belonging to the user (json)
 * @name /main
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/", ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // responding to get request with journals
        //res.json(decryptedJournals);
        res.render("main", { journals: decryptedJournals });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});


/**
 * Responds with a list of all journals belonging to the user (json)
 * @name /calendar/journals
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/journals", ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({ googleId: req.user.googleId }).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // responding to get request with journals
        res.json(decryptedJournals);
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});


/**
 * Get a specific journal from its id
 * @name /main/journal/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/journal/:id", ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // a specific journal from the user
        let encryptedJournal = await Journal.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();
        let decryptedJournal = getDecryptedJournal(encryptedJournal);

        // responding to get request with journal
        //console.log(decryptedJournal);
        //res.json(decryptedJournal);
        res.render("journalView", {journal: decryptedJournal, journals: decryptedJournals});
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});


/**
 * Gets the pages of a specific journal
 * @name /main/:id/pages
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/:id/pages", ensureAuth, async (req,res) => {
    try {
        // getting journal to get pages
        let encryptedJournal = await Journal.findOne({ googleId: req.user.googleId, _id: req.params.id }).lean();
        let pageIds = encryptedJournal.pageIds;
        let decryptedPages = [];

        // iterating over each page and decrypting them
        for (let i = 0; i < pageIds.length; i++) {
            // getting page from pageId
            let encryptedPage = await Page.findOne({ googleId: req.user.googleId, _id: pageIds[i] }).lean();
            let decryptedPage = {
                _id: pageIds[i],
                title: secret.decrypt(encryptedPage.title),
                googleId: req.user.googleId,
                journalId: req.params.id,
                lastModified: encryptedPage.lastModified,
                importance: encryptedPage.importance,
                content: secret.decrypt(encryptedPage.content)
            };

            decryptedPages.push(decryptedPage);
        }

        // responding with a list of pages
        res.json(decryptedPages);
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});


/**
 * Get a specific page from a specific journal
 * @name /main/page/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/page/:id", ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // getting page from id, decrypting page
        let encryptedPage = await Page.findOne({ googleId: req.user.googleId, _id: req.params.id }).lean();
        let decryptedPage = getDecryptedPage(encryptedPage, req.params.id, req.user.googleId);


        // getting journal title
        let encryptedJournal = await Journal.findById(encryptedPage.journalId);
        let decryptedJournal = getDecryptedJournal(encryptedJournal);

        // responding with the requested page
        //res.json(decryptedPage);
        //console.log(decryptedPage);
        res.render("pageView", { journals: decryptedJournals, page: decryptedPage, pageJournal: decryptedJournal });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});


/**
 * Get a specific page from a specific journal
 * @name /main/page/:id/fetch
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/page/:id/fetch", ensureAuth, async (req, res) => {
    try {
        // getting page from id, decrypting page
        let encryptedPage = await Page.findOne({ googleId: req.user.googleId, _id: req.params.id }).lean();
        let decryptedPage = getDecryptedPage(encryptedPage, req.params.id, req.user.googleId);


        // responding with the requested page
        //console.log(decryptedPage);
        res.json(decryptedPage);
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});

/**
 * Get a specific daily from its id
 * @name /main/daily/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/daily/:id", ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({ googleId: req.user.googleId }).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // getting daily from id, decrypting daily
        let encryptedDaily = await Daily.findOne({ googleId: req.user.googleId, _id: req.params.id }).lean();
        let detailsStr = `${encryptedDaily.details[1]} ${encryptedDaily.details[2]}, ${encryptedDaily.details[3]} (${encryptedDaily.details[0]})`;
        let decryptedDaily = {
            dailyId: req.params.id,
            googleId: req.user.googleId,
            dateObj: encryptedDaily.dateObj,
            details: encryptedDaily.details,
            detailsStr,
            date: encryptedDaily.date,
            month: encryptedDaily.month,
            year: encryptedDaily.year,
            title: secret.decrypt(encryptedDaily.title),
            content: secret.decrypt(encryptedDaily.content)
        };

        // responding with the requested page
        console.log(decryptedDaily);
        res.render("dailyView", { journals: decryptedJournals, daily: decryptedDaily });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});

// @desc Get a specific daily from its id
// @route GET
router.get("/daily/:id/fetch", ensureAuth, async (req, res) => {
    try {
        // getting daily
        let encryptedDaily = await Daily.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();
        let decryptedDaily = {
            dailyId: req.params.id,
            googleId: req.user.googleId,
            dateObj: encryptedDaily.dateObj,
            details: encryptedDaily.details,
            date: encryptedDaily.date,
            month: encryptedDaily.month,
            year: encryptedDaily.year,
            title: secret.decrypt(encryptedDaily.title),
            content: secret.decrypt(encryptedDaily.content)
        };

        // returning the decrypted daily
        res.json(decryptedDaily);
    } catch (err) {
        console.log(err);
    }
});


/**
 * Get a specific daily by month-date-year
 * @name /main/daily/:month/:date/:year
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/daily/:month/:date/:year", ensureAuth, async (req, res) => {
    try {
        let { month, date, year } = req.params;

        // getting daily
        let encryptedDaily = await Daily.findOne({googleId: req.user.googleId, month, date, year}).lean();

        // decrypting daily
        let decryptedDaily = {
            dailyId: encryptedDaily._id,
            googleId: req.user.googleId,
            details: encryptedDaily.details,
            date: encryptedDaily.date,
            month: encryptedDaily.month,
            year: encryptedDaily.year,
            title: secret.decrypt(encryptedDaily.title),
            content: secret.decrypt(encryptedDaily.content)
        };

        // responding with the decrypted daily object
        res.json(decryptedDaily);
    } catch (err) {
        console.log(err);
    }
});


/**
 * Gets all dailies based on month and year
 * @name /main/daily/:month/:year
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/daily/:month/:year", ensureAuth, async (req, res) => {
    try {
        let { month, year } = req.params;

        // getting dailies
        let encryptedDailies = await Daily.find({googleId: req.user.googleId, month, year}).lean();
        let decryptedDailies = [];

        // decrypting each daily
        for (let i = 0; i < encryptedDailies.length; i++) {
            let encryptedDaily = encryptedDailies[i];
            let decryptedDaily = {
                dailyId: encryptedDaily._id,
                googleId: req.user.googleId,
                details: encryptedDaily.details,
                date: encryptedDaily.date,
                month: encryptedDaily.month,
                year: encryptedDaily.year,
                title: secret.decrypt(encryptedDaily.title),
                content: secret.decrypt(encryptedDaily.content)
            };

            decryptedDailies.push(decryptedDaily);
        }

        // responding with decrypted dailies
        res.json(decryptedDailies);
    } catch (err) {
        console.log(err);
    }
});

/**
 * Creates a new journal from a post request
 * @name /main/journal
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.post("/journal", ensureAuth, async (req, res) => {
    try {
        // creating a new journal with empty pages
        let newJournal = {
            title: secret.encrypt(req.body.title),
            googleId: req.user.googleId,
            pages: [],
            pageIds: []
        };
        
        // adding new journal to database
        await Journal.create(newJournal);
        res.redirect("/");
        //console.log("Created Journal");
        //res.status(200).end();

    } catch (err) {
        console.log(err);
    }
});


/**
 * Creates a page in the specified journal from a post request
 * @name /main/post/journal/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.post("/post/journal/:id", ensureAuth, async (req, res) => {
    try {
        // getting journal by id
        let encryptedJournal = await Journal.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();

        console.log(req.body);
        // encrypting title of page
        let encryptedTitle = secret.encrypt(req.body.title);

        // creating new page (encrypted)
        let toPost = {
            title: encryptedTitle,
            googleId: req.user.googleId,
            journalId: req.params.id,
            lastModified: new Date(),
            content: secret.encrypt(req.body.content)
        };

        if (encryptedJournal) {
            // adding new page to database
            let newPage = await Page.create(toPost);
            // console.log("Page Created");

            // updating journal in database to contain our new page
            let newPages = encryptedJournal.pages;
            let newPageIds = encryptedJournal.pageIds;

            newPages.push(encryptedTitle);
            newPageIds.push(newPage._id);

            // sending update request
            await Journal.findByIdAndUpdate(req.params.id, { pages: newPages, pageIds: newPageIds });
            // console.log("Added New Page To Journal");

            res.redirect("/main/page/" + newPage._id);
            //res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});


/**
 * Creates a new daily object
 * @name /main/daily
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.post("/daily", ensureAuth, async (req, res) => {
    try {
        let logDate = new Date(req.body.dateObj);

        let detailsStr = logDate.toString().split(" ").slice(0,4);

        // creating new daily
        let newDaily = {
            googleId: req.user.googleId,
            dateObj: logDate,
            details: detailsStr,
            date: logDate.getDate(),
            month: (logDate.getMonth() + 1),
            year: (logDate.getYear() + 1900),
            title: secret.encrypt(req.body.title),
            content: secret.encrypt(req.body.content)
        };

        // adding new daily to database
        let createdDaily = await Daily.create(newDaily);
        console.log("Created daily");
        res.redirect("main/daily/" + createdDaily._id);
    } catch (err) {
        console.log(err);
    }
});

// @desc Creates a new daily object for a given month/day/year
// @route POST
router.post("/post/daily/:month/:date/:year", ensureAuth, async (req, res) => {
    try {
        let { month, date, year } = req.params;
        let logDate = new Date(year, month-1, date);

        let detailsStr = logDate.toString().split(" ").slice(0, 4);

        // creating new daily
        let newDaily = {
            googleId: req.user.googleId,
            dateObj: logDate,
            details: detailsStr,
            date: logDate.getDate(),
            month: (logDate.getMonth() + 1),
            year: (logDate.getYear() + 1900),
            title: secret.encrypt(req.body.title),
            content: secret.encrypt(req.body.content)
        };

        // adding new daily to database
        let createdDaily = await Daily.create(newDaily);
        console.log("Created daily");
        res.redirect("/main/daily/" + createdDaily._id);
    } catch (err) {
        console.log(err);
    }
});


/**
 * Updates a page given its id
 * @name /main/page/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.put("/page/:id", ensureAuth, async (req, res) => {
    try {
        // getting the encrypted page
        let encryptedPage = await Page.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();

        if (encryptedPage) {
            // creating page to update
            let pageTitle = secret.encrypt(req.body.title);

            let newPage = {
                title: pageTitle,
                lastModified: new Date(),
                content: secret.encrypt(req.body.content)
            };

            // getting journal page list
            let encryptedJournal = await Journal.findById(encryptedPage.journalId);

            let newPages = encryptedJournal.pages;
            let pageIds = encryptedJournal.pageIds;

            let index = pageIds.indexOf(req.params.id);
            if (index != -1) {
                newPages[index] = pageTitle;
            }

            // updating page in database
            await Page.findByIdAndUpdate(req.params.id, newPage);
            // console.log("Updated page in database");

            // updating journal
            await Journal.findByIdAndUpdate(encryptedPage.journalId, { pages: newPages });
            // console.log("Updated page title in Journal");
            res.redirect("/main/page/" + req.params.id);
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});


/**
 * Updates a daily given its _id
 * @name /main/daily/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.put("/daily/:id", ensureAuth, async (req, res) => {
    try {
        let toUpdate = await Daily.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();

        if (toUpdate) {
            let encryptedContent = secret.encrypt(req.body.content);
            let encryptedTitle = secret.encrypt(req.body.title);
            await Daily.findByIdAndUpdate(req.params.id, {title: encryptedTitle, content: encryptedContent});
            console.log("Updated daily in database");
            res.redirect("/main/daily/" + req.params.id);
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});


/**
 * Deletes a journal given its _id
 * @name /main/journal/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.delete("/journal/:id", ensureAuth, async (req, res) => {
    try {
        // console.log("start deleting a journal");
        
        // getting the journal to delete
        let toDelete = await Journal.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();

        if (toDelete) {
            // getting pages to delete from journal
            let pagesToDelete = toDelete.pageIds;

            // deleting pages from journal
            for (let i = 0; i < pagesToDelete.length; i++) {
                // deleting page
                await Page.deleteOne({ _id: pagesToDelete[i]});
            }
            // console.log("Deleted pages");

            await Journal.deleteOne({ _id: req.params.id});
            // console.log("Deleted Journal");

            res.redirect("/");
            
            //res.status(200).end();
        } else {
            // ends with unsuccessful response status
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});


/**
 * Deletes a page given its _id
 * @name /main/page/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.delete("/page/:id", ensureAuth, async (req, res) => {
    try {
        // getting page to delete
        let toDelete = await Page.findOne({googleId: req.user.googleId, _id: req.params.id});

        if (toDelete) {
            // getting the journal to update it
            let toUpdate = await Journal.findOne({_id: toDelete.journalId});
            // getting pages
            let newPages = toUpdate.pages;
            let newPageIds = toUpdate.pageIds;

            // getting index of page to delete in journal pages array
            let index = newPageIds.indexOf(req.params.id);

            if (index != -1) {
                newPages.splice(index, 1);
                newPageIds.splice(index,1);
            }
            // removing page
            await Page.deleteOne({_id: req.params.id});
            // console.log("Removed page from Pages collection");

            // updating journal
            await Journal.findByIdAndUpdate(toDelete.journalId, { pages: newPages, pageIds: newPageIds});

            res.redirect("/");
            
            // console.log("Updated journal by removing page");

            //res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});


/**
 * Deletes a daily given its _id
 * @name /main/daily/:id
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.delete("/daily/:id", ensureAuth, async (req, res) => {
    try {
        let deleted = await Daily.deleteOne({googleId: req.user.googleId, _id: req.params.id});
        
        if (deleted) {
            console.log("Deleted daily");
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});


/**
 * Deletes a daily given the month-date-year
 * @name /main/daily/:month/:date/:year
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.delete("/daily/:month/:date/:year", ensureAuth, async (req, res) => {
    try {
        let { month, date, year } = req.params;
        let deleted = await Daily.deleteOne({ googleId: req.user.googleId, month, date, year});

        if (deleted) {
            console.log("Deleted daily");
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});


/**
 * Add a new journal
 * @name /main/add/journal
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/add/journal", ensureAuth, async (req, res) => {
    // getting all users journals with googleId and calling lean to turn them into json
    let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
    let decryptedJournals = getDecryptedJournals(encryptedJournals);

    res.render("journalAdd", {journals: decryptedJournals});
});


/**
 * Add a page to a specific journal
 * @name /main/add/:journalId/page
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/add/:journalId/page", ensureAuth, async (req, res) => {
    // getting all users journals with googleId and calling lean to turn them into json
    let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
    let decryptedJournals = getDecryptedJournals(encryptedJournals);

    // a specific journal from the user
    let encryptedJournal = await Journal.findOne({googleId: req.user.googleId, _id: req.params.journalId}).lean();
    let decryptedJournal = getDecryptedJournal(encryptedJournal);

    res.render("pageAdd", {journal: decryptedJournal, journals: decryptedJournals});
});

// add a daily for a given date
router.get("/add/daily/:month/:date/:year", ensureAuth, async (req, res) => {
    // getting all users journals with googleId and calling lean to turn them into json
    let encryptedJournals = await Journal.find({ googleId: req.user.googleId }).lean();
    let decryptedJournals = getDecryptedJournals(encryptedJournals);

    // getting details for the daily add
    let { month, date, year } = req.params;
    let daily = await Daily.findOne({ googleId: req.user.googleId, month, date, year }).lean();

    // if already a daily exists
    if (daily) {
        // redirect to the daily view
        res.redirect("/main/daily/" + daily._id);
    } else {
        // render the add daily page
        let logDate = new Date(year,month-1,date);
        let details = logDate.toString().split(" ").slice(0, 4);
        let detailsStr = `${details[1]} ${details[2]}, ${details[3]} (${details[0]})`;
        res.render("dailyAdd", { journals: decryptedJournals, month, date, year, detailsStr });
    }
});


module.exports = router;