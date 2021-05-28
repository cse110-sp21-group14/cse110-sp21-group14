/**
 * @file This script runs on the back end (server) to route the index page + handlebars
 * @author Group 14 (Back End)
 */
const express = require("express");
const router = express.Router();

const { ensureGuest } = require("../middleware/auth");

/**
 * Login page
 * @name /calendar
 * @function
 * @param {string} URL - Express path
 * @param {callback} ensureGuest - Ensure user not enter the page before login
 * @param {callback} middleware - Express middleware.
 */
router.get("/", ensureGuest, (req, res) => {
    res.render("login", {
        layout: "login"
    });
});



module.exports = router;