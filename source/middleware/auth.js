/**
 * Middleware to protect users security
 * @module calendar module
 */
module.exports = {
    // Middleware functions

    ensureAuth: function (req, res, next) {
        // avoid logout when refreshing the page
        if (req.isAuthenticated()){
            return next();
        } else {
            res.redirect("/");
        }
    },
    ensureGuest: function (req, res, next) {
        // avoid entering the page before login
        if (req.isAuthenticated()){
            res.redirect("/main");
        } else {
            return next();
        }
    }
};