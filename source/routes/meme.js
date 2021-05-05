const express = require('express');
const router = express.Router();

// @desc     /main
// @route    GET
router.get('/', (req, res) => {
    res.render('meme');
});

module.exports = router;