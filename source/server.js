/**
 * @file This script will be the main script responsible with hosting the
 *          project and routing the webpages
 * @author Group 14 (Back End)
 */

const express = require("express");                // create basic express server
const dotenv = require("dotenv");                  // store config of code environment
const path = require("path");
const exphbs = require("express-handlebars");      // create express-handlebars
const morgan = require("morgan");                  // show any request in the console
const passport = require("passport");              // google oauth
const session = require("express-session");
const MongoStore = require("connect-mongo"); // avoid logout while refreshing the page
const methodOverride = require("method-override");
const connectDB = require("./config/db");          // connect mongoDB atlas


dotenv.config({ path: "./config/config.env" });    // load config.env


require("./config/passport")(passport);            // passport config


connectDB();


const app = express();
const PORT = process.env.PORT || 3000;            // process.env navigates variables in config.env
// run in localhost:3000 if there is no PORT variable defined in config.env


if(process.env.NODE_ENV === "development"){       // display cur operation in the console
    app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
// set ".hbs" as handlebars" extension
// set default layout as "main" (views/layouts/main.hbs)

app.set("view engine", ".hbs"); 


app.use(express.static(path.join(__dirname + "/public")));




// Sessions
app.use(session({
    secret: "keyboard cat",
    resave: false,                  // don't want to save a session if nothing is modified
    saveUninitialized: false,       // don't create a session until something is stored
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));


//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// body parser for requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// method override
app.use(methodOverride(function (req) {
    console.log("run methodOverride");
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
        let method = req.body._method;
        console.log("get method:" + method);
        delete req.body._method;
        return method;
    }
}));

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/main", require("./routes/main"));
app.use("/calendar", require("./routes/calendar"));
app.use("/settings", require("./routes/settings"));



app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
