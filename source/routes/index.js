/**
 * Filename: index.js
 * Author: Group 14 (Back End)
 * Purpose: This script runs on the back end (server) to route the index page + handlebars
 */
const express = require('express');
const router = express.Router();
const { ensureGuest } = require('../middleware/auth');

// @desc     /
// @route    GET
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    });
});



module.exports = router;