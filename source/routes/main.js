/**
 * Filename: main.js
 * Author: Stephen & Yinxuan (Back End)
 * Date: May 23th
 * Purpose: This script runs on the back end (server) to route the main page + handlebars
 */
const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const secret = require("../config/secret");
const Journal = require("../models/Journal");
const Page = require("../models/Page");
const Daily = require("../models/Daily");
const { getDecryptedJournals, getDecryptedJournal, getDecryptedPage } = require("../config/decrypt");

// @desc     /main
// @desc responds with a list of all journals belonging to the user (json)
// @route GET
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

// @desc responds with a list of all journals belonging to the user (json)
// @route GET
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

// @desc /main/journal/:id
// @desc get a specific journal from its id
// @route GET
router.get("/journal/:id", ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // a specific journal from the user
        let encryptedJournal = await Journal.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();
        let decryptedJournal = getDecryptedJournal(encryptedJournal);

        // responding to get request with journal
        console.log(decryptedJournal);
        //res.json(decryptedJournal);
        res.render("journalView", {journal: decryptedJournal, journals: decryptedJournals});
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});


// @desc gets the pages of a specific journal
// @route GET
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

// @desc Get a specific page from a specific journal
// @route GET
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
        console.log(decryptedPage);
        res.render("pageView", { journals: decryptedJournals, page: decryptedPage, pageJournal: decryptedJournal });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});

// @desc Get a specific page from a specific journal
// @route GET
router.get("/page/:id/fetch", ensureAuth, async (req, res) => {
    try {
        // getting page from id, decrypting page
        let encryptedPage = await Page.findOne({ googleId: req.user.googleId, _id: req.params.id }).lean();
        let decryptedPage = getDecryptedPage(encryptedPage, req.params.id, req.user.googleId);


        // responding with the requested page
        console.log(decryptedPage);
        res.json(decryptedPage);
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});

// @desc Get a specific daily from its id
// @route GET
router.get("/daily/:id", ensureAuth, async (req, res) => {
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
            content: secret.decrypt(encryptedDaily.content)
        };

        // returning the decrypted daily
        res.json(decryptedDaily);
    } catch (err) {
        console.log(err);
    }
});

// @desc Get a specific daily by month-date-year
// @route GET
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
            content: secret.decrypt(encryptedDaily.content)
        };

        // responding with the decrypted daily object
        res.json(decryptedDaily);
    } catch (err) {
        console.log(err);
    }
});

// @desc Gets all dailies based on month and year
// @route GET
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

// @desc /main/journal
// @desc creates a new journal from a post request
// @route POST
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

// @desc creates a page in the specified journal from a post request
// @route POST
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
            console.log("Page Created");

            // updating journal in database to contain our new page
            let newPages = encryptedJournal.pages;
            let newPageIds = encryptedJournal.pageIds;

            newPages.push(encryptedTitle);
            newPageIds.push(newPage._id);

            // sending update request
            await Journal.findByIdAndUpdate(req.params.id, { pages: newPages, pageIds: newPageIds });
            console.log("Added New Page To Journal");

            res.redirect("/main/page/" + newPage._id);
            //res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});

// @desc Creates a new daily object
// @route POST
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
            content: secret.encrypt(req.body.content)
        };

        // adding new daily to database
        await Daily.create(newDaily);
        console.log("Created daily");
        res.status(200).end();
    } catch (err) {
        console.log(err);
    }
});

// @desc Updates a page given its id
// @route PUT
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
            console.log("Updated page in database");

            // updating journal
            await Journal.findByIdAndUpdate(encryptedPage.journalId, { pages: newPages });
            console.log("Updated page title in Journal");
            res.redirect("/main/page/" + req.params.id);
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});

// @desc Updates a daily given its _id
// @route PUT
router.put("/daily/:id", ensureAuth, async (req, res) => {
    try {
        let toUpdate = await Daily.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();

        if (toUpdate) {
            let encryptedContent = secret.encrypt(req.body.content);
            await Daily.findByIdAndUpdate(req.params.id, { content: encryptedContent});
            console.log("Updated daily in database");
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});

// @desc Deletes a journal given its _id
// @route DELETE
router.delete("/journal/:id", ensureAuth, async (req, res) => {
    try {
        console.log("start deleting a journal");
        
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
            console.log("Deleted pages");

            await Journal.deleteOne({ _id: req.params.id});
            console.log("Deleted Journal");

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

// @desc Deletes a page given its _id
// @route DELETE
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
            console.log("Removed page from Pages collection");

            // updating journal
            await Journal.findByIdAndUpdate(toDelete.journalId, { pages: newPages, pageIds: newPageIds});

            res.redirect("/");
            
            console.log("Updated journal by removing page");

            //res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        console.log(err);
    }
});

// @desc Deletes a daily given its _id
// @route DELETE
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

// @desc Deletes a daily given the month-date-year
// @route DELETE
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

// add journal
router.get("/add/journal", ensureAuth, async (req, res) => {
    // getting all users journals with googleId and calling lean to turn them into json
    let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
    let decryptedJournals = getDecryptedJournals(encryptedJournals);

    res.render("journalAdd", {journals: decryptedJournals});
});

// add page to a specific journal
router.get("/add/:journalId/page", ensureAuth, async (req, res) => {
    // getting all users journals with googleId and calling lean to turn them into json
    let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
    let decryptedJournals = getDecryptedJournals(encryptedJournals);

    // a specific journal from the user
    let encryptedJournal = await Journal.findOne({googleId: req.user.googleId, _id: req.params.journalId}).lean();
    let decryptedJournal = getDecryptedJournal(encryptedJournal);

    res.render("pageAdd", {journal: decryptedJournal, journals: decryptedJournals});
});


module.exports = router;