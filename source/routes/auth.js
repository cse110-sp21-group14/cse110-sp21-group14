/**
 * Filename: auth.js
 * Author: Group 14 (Back End)
 * Purpose: Google OAuth and callback for login
 */
const express = require("express");
const passport = require("passport");

// connect router to server
const router = express.Router();

// @desc            Auth w Google
// @route           GET /auth/google
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

// @desc            Callback
// @route           GET /auth/google/callback
router.get("/google/callback", passport.authenticate("google", { failureRedirect:"/" }), 
    (req, res) => {
        res.redirect("/main");
    }
);

// @desc            Logout user
// @route           /auth/logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;