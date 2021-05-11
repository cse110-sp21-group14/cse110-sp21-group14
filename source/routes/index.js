/**
 * Filename: index.js
 * Author: Group 14 (Back End)
 * Purpose: This script runs on the back end (server) to route the index page + handlebars
 */
const express = require('express');
const router = express.Router();

// @desc     /
// @route    GET
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;