const mongoose = require('mongoose')

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
})

module.exports = mongoose.model('Journal', JournalSchema);
