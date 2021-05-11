/**
 * Filename: main.js
 * Author: Group 14 (Back End)
 * Purpose: This script runs on the back end (server) to route the main page + handlebars
 */
const express = require('express');
const router = express.Router();

// @desc     /main
// @route    GET
router.get('/', (req, res) => {
    res.render('main');
});

module.exports = router;