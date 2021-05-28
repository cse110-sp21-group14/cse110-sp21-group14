/**
 * @file Google OAuth and callback for login
 * @author Group 14 (Back End)
 */

/**
 * express module
 * @const
 */
const express = require("express");

const passport = require("passport");
const router = express.Router();


/**
 * Auth w Google
 * @name /auth/google
 * @function
 * @param {string} URL - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

/**
 * Callback function after login
 * @name /auth/google/callback
 * @function
 * @param {string} URL - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get("/google/callback", passport.authenticate("google", { failureRedirect:"/" }), 
    (req, res) => {
        res.redirect("/main");
    }
);

/**
 * Logout user
 * @name /auth/logout
 * @function
 * @param {string} URL - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;