/**
 * @file routing for calendar views
 * @author Group 14 (Back End)
 */

const express = require("express");

const router = express.Router();

const { ensureAuth } = require("../middleware/auth");

/**
 * Month view
 * @name /calendar
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureAuth - Ensure user security when refreshing the page
 * @param {callback} middleware - Express middleware.
 */
router.get("/", ensureAuth, async (req, res) => {
    try {
        res.render("calendar", {
            layout: "calendar"
        });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});

/**
 * Calendar route
 * @module calendar module
 */
module.exports = router;