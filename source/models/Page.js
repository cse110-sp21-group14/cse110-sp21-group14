const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    journalId: {
        type: String,
        required: true
    },
    lastModified: {
        type: Date,
        default: Date.now,
        required: true
    },
    importance: {
        type: Number,
        default: 0,
        required: true
    },
    content: {
        type: String,
        default: "",
        required: true
    }
});

module.exports = mongoose.model('Page', PageSchema);
