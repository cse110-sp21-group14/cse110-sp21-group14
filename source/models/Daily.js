const mongoose = require('mongoose')

const DailySchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        default: "",
        required: true
    }
})

module.exports = mongoose.model('Daily', DailySchema);
