/**
 * Filename: auth.js
 * Author: Group 14 (Back End)
 * Purpose: Google OAuth and callback for login
 */
const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');

// @desc     /calendar
// @desc     month view
// @route    GET
router.get('/', ensureAuth, async (req, res) => {
    try {
        res.render('calendar', {
            layout: 'calendar'
        });
    } catch (err) {
        console.log(err);
        // TODO: determine what to return in the event an invalid fetch is created
    }
});


module.exports = router;