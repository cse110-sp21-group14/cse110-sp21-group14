const express = require("express");
const router = express.Router();

const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, async (req, res) => {
    res.render("settings", {
        layout: "settings"
    });
});

module.exports = router;