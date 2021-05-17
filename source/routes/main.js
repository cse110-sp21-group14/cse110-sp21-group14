/**
 * Filename: main.js
 * Author: Group 14 (Back End)
 * Purpose: This script runs on the back end (server) to route the main page + handlebars
 */
const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');
const secret = require("../config/secret");
const Journal = require("../models/Journal");
const Page = require("../models/Page");

// @desc     /main
// @route    GET
router.get('/', ensureAuth, async (req, res) => {
    res.render('main');
});

// @desc responds with a list of all journals belonging to the user (json)
// @route GET
router.get('/journals', ensureAuth, async (req, res) => {
    try {
        // getting all users journals with googleId and calling lean to turn them into json
        let encryptedJournals = await Journal.find({googleId: req.user.googleId}).lean();
        let decryptedJournals = [];

        // decrypting each journal
        encryptedJournals.forEach(journal => {
            // getting page names for a journal
            let encryptedPages = journal.pages;
            let decryptedPages = [];

            // decrypting page names for a journal
            encryptedPages.forEach(page => {
                decryptedPages.push(secret.decrypt(page));
            });

            let decrypted = {
                _id: journal._id,
                title: secret.decrypt(journal.title),
                googleId: journal.googleId,
                pages: decryptedPages,
                pageIds: journal.pageIds
            };

            // adding decrypted journal
            decryptedJournals.push(decrypted);
        });

        // responding to get request with journals
        res.json(decryptedJournals);
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});

// @desc get a specific journal from its id
// @route GET
router.get('/:id', ensureAuth, async (req, res) => {
    try {
        // a specific journal from the user
        let encryptedJournal = await Journal.findOne({googleId: req.user.googleId, _id: req.params.id}).lean();
        let encryptedPages = encryptedJournal.pages;
        let decryptedPages = [];

        // decrypting each page belonging to the requested journal
        encryptedPages.forEach((page) => {
            decryptedPages.push(secret.decrypt(page));
        });

        let decryptedJournal = {
            _id: encryptedJournal._id,
            title: secret.decrypt(encryptedJournal.title),
            googleId: encryptedJournal.googleId,
            pages: decryptedPages,
            pageIds: encryptedJournal.pageIds
        };

        // responding to get request with journal
        res.json(decryptedJournal);
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
router.get('/:id/:id', ensureAuth, async (req, res) => {
    try {
        // getting page from id
        let encryptedPage = await Page.findOne({ googleId: req.user.googleId, _id: req.params.id }).lean();
        
        // decrypting page
        let decryptedPage = {
            _id: req.params.id,
            title: secret.decrypt(encryptedPage.title),
            googleId: req.user.googleId,
            journalId: encryptedPage.journalId,
            lastModified: encryptedPage.lastModified,
            importance: encryptedPage.importance,
            content: secret.decrypt(encryptedPage.content)
        };

        // responding with the requested page
        res.json(decryptedPage);
    } catch (err) {
        console.log(err);
        // TODO: determine what to return from a fetch that results in an error
    }
});

module.exports = router;