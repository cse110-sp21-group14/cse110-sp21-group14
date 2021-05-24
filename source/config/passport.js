//const mongoose = require("mongoose");
//const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const secret = require("./secret");

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
    async(accessToken, refreshToken, profile, done) => {
        console.log(profile);

        // encrypting profile.id with helper
        let newId = "";
        let helper = secret.decrypt(process.env.HELPER_KEY);

        // building newId
        for (let i = 0; i < profile.id.length; i++) {
            let charCode = profile.id.charCodeAt(i) + helper.charCodeAt(i);
            newId += String.fromCharCode(charCode);
        }

        // building new user
        const newUser = {
            googleId: newId,
            displayName: secret.encrypt(profile.displayName),
            image: profile.photos[0].value,
            email: secret.encrypt(profile.emails[0].value),
        };

        // checking to see if user is in mongoDB else it will add new user
        try {
            let user = await User.findOne({googleId : newId});
            if (user) {
                done(null, user);
            } else {
                user = await User.create(newUser);
                done(null, user);
            }

        } catch (err) {
            console.error;
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};