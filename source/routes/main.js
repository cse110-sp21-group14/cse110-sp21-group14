/**
 * Filename: main.js
 * Author: Stephen & Yinxuan (Back End)
 * Date: May 17th
 * Purpose: This script runs on the back end (server) to route the main page + handlebars
 */
const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');
const secret = require("../config/secret");
const Journal = require("../models/Journal");
const Page = require("../models/Page");
const { getDecryptedJournals, getDecryptedJournal, getDecryptedPage } = require("../config/decrypt");

// @desc     /main
// @desc responds with a list of all journals belonging to the user (json)
// @route GET
router.get('/', ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // responding to get request with journals
        //res.json(decryptedJournals);
        res.render('main', { journals: decryptedJournals });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});


// @desc /main/journal/:id
// @desc get a specific journal from its id
// @route GET
router.get('/journal/:id', ensureAuth, async (req, res) => {
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
        res.render("journalView", {journal: decryptedJournal, journals: decryptedJournals})
    } catch (err) {
        console.log(err)
        // TODO: determine what to return in the event an invalid fetch is created
    }
});


// @desc gets the pages of a specific journal
// @route GET
router.get('/:id/pages', ensureAuth, async (req,res) => {
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
router.get('/page/:id', ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
        let decryptedJournals = getDecryptedJournals(encryptedJournals);

        // getting page from id, decrypting page
        let encryptedPage = await Page.findOne({ googleId: req.user.googleId, _id: req.params.id }).lean();
        let decryptedPage = getDecryptedPage(encryptedPage, req.params.id, req.user.googleId);


        // responding with the requested page
        //res.json(decryptedPage);
        console.log(decryptedPage);
        res.render("pageView", { journals: decryptedJournals, page: decryptedPage });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});

// TODO
router.get('/add/journal', ensureAuth, async (req, res) => {
    res.render("main");
});

// add page to a specific journal
router.get('/add/page', ensureAuth, async (req, res) => {
    // getting all users journals with googleId and calling lean to turn them into json
    let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
    let decryptedJournals = getDecryptedJournals(encryptedJournals);

    res.render("pageAdd", {journals: decryptedJournals});
});

module.exports = router;