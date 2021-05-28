/**
 * @file Create schema for journals under 'My Journal' view
 * @author Group 14 (Back End)
 */
const mongoose = require("mongoose");

/**
 * @class JournalSchema
 */
const JournalSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    pages: {
        type: [String],
        default: [],
        required: true
    },
    pageIds: {
        type: [String],
        default: [],
        required: true
    }
});

module.exports = mongoose.model("Journal", JournalSchema);
