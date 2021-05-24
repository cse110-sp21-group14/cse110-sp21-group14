/**
 * @file This script runs on the back end (server) to route the main page + handlebars
 * @author Group 14 (Back End)
 */
const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

// @desc     /main
// @route    GET
router.get("/", ensureAuth, (req, res) => {
    res.render("main");
});

module.exports = router;