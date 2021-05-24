/**
 * @file This script runs on the back end (server) to route the index page + handlebars
 * @author Group 14 (Back End)
 */
const express = require("express");
const router = express.Router();
const { ensureGuest } = require("../middleware/auth");

// @desc     /
// @route    GET
router.get("/", ensureGuest, (req, res) => {
    res.render("login", {
        layout: "login"
    });
});



module.exports = router;