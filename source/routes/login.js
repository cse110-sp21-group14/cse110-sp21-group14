const express = require('express');
const router = express.Router();

// @desc     /login
// @route    GET
router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;