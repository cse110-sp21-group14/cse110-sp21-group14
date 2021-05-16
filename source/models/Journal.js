const mongoose = require('mongoose')

const JournalSchema = new mongoose.Schema({
    journalName: {
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
    }
})

module.exports = mongoose.model('Journal', JournalSchema);