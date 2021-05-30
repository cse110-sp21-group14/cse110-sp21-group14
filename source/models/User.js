/**
 * @file Create schema for each user
 * @author Group 14 (Back End)
 */
const mongoose = require("mongoose");

/**
 * @class UserSchema
 */
const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);