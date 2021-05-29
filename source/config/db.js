/**
 * @file Connect MongoDB Atlas
 * @author Group 14 (Back End)
 */

const mongoose = require("mongoose");

/**
 * Connect to MongoDB database
 * @async
 * @function
 */
const connectDB = async () => {
    // Reference: https://mongoosejs.com/docs/
    // Find MONGO_URI: Clusters -> Connect -> Connect your application
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false  // avoid warning in the console
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;