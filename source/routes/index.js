const express = require('express');
const router = express.Router();

// @desc     /
// @route    GET
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;