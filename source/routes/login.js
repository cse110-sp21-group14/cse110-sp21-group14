/**
 * Filename: login.js
 * Author: Group 14 (Back End)
 * Purpose: This script runs on the back end (server) to route the login page + handlebars
 */
const express = require('express');
const router = express.Router();

// @desc     /login
// @route    GET
router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;