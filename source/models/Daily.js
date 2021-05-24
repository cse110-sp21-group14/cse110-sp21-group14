const mongoose = require("mongoose");

const DailySchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    dateObj: {
        type: Date,
        required: true
    },
    details: {
        type: [String],
        required: true
    },
    date: {
        type: Number,
        min: 1,
        max: 31,
        required: true
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: true
    },
    year: {
        type: Number,
        min: 0,
        required: true
    },
    content: {
        type: String,
        default: "",
        required: true
    }
});

module.exports = mongoose.model("Daily", DailySchema);
