/**
 * Filename: server.js
 * Author: Group 14
 * Purpose: This script will be the main script responsible with hosting the
 *          project and routing the webpages
 */
const express = require('express')                // create basic express server
const dotenv = require('dotenv')                  // store config of code environment
const exphbs = require('express-handlebars')      // create express-handlebars


dotenv.config({ path: './config/config.env '})    // load config.env


const app = express();
const PORT = process.env.PORT || 3000;            // process.env navigates variables in config.env
                                                  // run in localhost:3000 if there is no PORT variable defined in config.env


// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
                                                  // set '.hbs' as handlebars' extension
                                                  // set default layout as 'main' (views/layouts/main.hbs)
app.set('view engine', '.hbs'); 


// Routes
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/main', require('./routes/main'));
//app.use('/calendar', require('./routes/calendar'));
//app.use('/setting', require('./routes/setting'));

app.use(express.static(__dirname + '/public'));

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))