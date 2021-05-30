/**
 * @constructor
 * @param {Model} model 
 * @param {Date} date 
 */
var Calendar = function (model, date) {

    this.Model = model;
    this.Today = new Date();

    this.Selected = this.Today;
    this.Today.Month = this.Today.getMonth();
    this.Today.Year = this.Today.getFullYear();
    if (date) { this.Selected = date; }
    this.Selected.Month = this.Selected.getMonth();
    this.Selected.Year = this.Selected.getFullYear();

    this.Selected.Days = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDate();
    this.Selected.FirstDay = new Date(this.Selected.Year, (this.Selected.Month), 1).getDay();
    this.Selected.LastDay = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDay();

    this.Prev = new Date(this.Selected.Year, (this.Selected.Month - 1), 1);
    if (this.Selected.Month == 0) { this.Prev = new Date(this.Selected.Year - 1, 11, 1); }
    this.Prev.Days = new Date(this.Prev.getFullYear(), (this.Prev.getMonth() + 1), 0).getDate();
};

/**
 * Creates a calendar
 * @function
 * @param {Calendar} calendar 
 * @param {Element} element 
 * @param {*} adjuster 
 */
function createCalendar(calendar, element, adjuster) {
    //console.log(calendar.Model);
    var newDate = new Date(calendar.Selected.Year, calendar.Selected.Month, 1);
    if (typeof adjuster !== "undefined") {
        //console.log(adjuster);

        newDate = new Date(calendar.Selected.Year, calendar.Selected.Month, 1);
        calendar = new Calendar(calendar.Model, newDate);
        element.innerHTML = "";
    }
    //console.log(calendar);

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var mainSection = document.createElement("div");
    mainSection.className += "cld-main";

    /**
     * Creates today's date, next/prev month button in the HTML
     * @function
     */
    function AddDateTime() {
        var datetime = document.createElement("div");
        datetime.className += "cld-datetime";
        // prev month button
        var rwd = document.createElement("div");
        rwd.className += " cld-rwd cld-nav";
        rwd.addEventListener("click", function () {
            fetchevents(calendar.Selected.Month - 1, calendar.Selected.Year, calendar, element, -1);
        });
        rwd.innerHTML = `<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,50 75,0 75,100"></polyline></svg>`;
        datetime.appendChild(rwd);
        // shows today's date above
        var today = document.createElement("div");
        today.className += " today";
        today.innerHTML = months[calendar.Selected.Month] + ", " + calendar.Selected.Year;
        datetime.appendChild(today);
        // next month button
        var fwd = document.createElement("div");
        fwd.className += " cld-fwd cld-nav";
        fwd.addEventListener("click", function () {
            fetchevents(calendar.Selected.Month + 1, calendar.Selected.Year, calendar, element, 1);
        });
        fwd.innerHTML = `<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,0 75,50 0,100"></polyline></svg>`;
        datetime.appendChild(fwd);
        // append nav bar on top
        mainSection.appendChild(datetime);
    }

    /**
     * Adds weekday labels to the HTML
     * @function
     */
    function AddLabels() {
        var labels = document.createElement("ul");
        labels.className = "cld-labels";
        var labelsList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for (var i = 0; i < labelsList.length; i++) {
            var label = document.createElement("li");
            label.className += "cld-label";
            label.innerHTML = labelsList[i];
            labels.appendChild(label);
        }
        mainSection.appendChild(labels);
    }

    /**
     * Add days to the HTML
     * @function
     */
    function AddDays() { 
        /**
         * Create Number Element
         * @param {int} n 
         * @returns {number}
         */
        function DayNumber(n) {
            var number = document.createElement("p");
            number.className += "cld-number";
            number.innerHTML += n;
            return number;
        }
        var days = document.createElement("ul");
        days.className += "cld-days";
        // Previous Month's Days
        for (var i = 0; i < (calendar.Selected.FirstDay); i++) {
            var day = document.createElement("li");
            day.className += "cld-day prevMonth";

            var number = DayNumber((calendar.Prev.Days - calendar.Selected.FirstDay) + (i + 1));
            day.appendChild(number);

            days.appendChild(day);
        }
        // Current Month's Days
        for (i = 0; i < calendar.Selected.Days; i++) {
            day = document.createElement("li");
            day.className += "cld-day currMonth";

            number = DayNumber(i + 1);
            // Check Date against Event Dates
            for (var n = 0; n < calendar.Model.length; n++) {
                var evDate = calendar.Model[n].Date;
                var toDate = new Date(calendar.Selected.Year, calendar.Selected.Month, (i + 1));
                if (evDate.getTime() == toDate.getTime()) {
                    day.className += " eventday";
                    number.className += " eventday";
                    var title = document.createElement("span");
                    title.className += "cld-title";
                    if (typeof calendar.Model[n].Link == "function") {
                        var a = document.createElement("a");
                        a.setAttribute("href", "#");
                        a.innerHTML += calendar.Model[n].Title;
                        a.addEventListener("click", calendar.Model[n].Link);
                        title.appendChild(a);
                    } else {
                        title.innerHTML += `<a href="` + calendar.Model[n].Link + `">` + calendar.Model[n].Title + `</a>`;
                    }
                    number.appendChild(title);
                }
            }
            day.appendChild(number);
            // If Today..
            if ((i + 1) == calendar.Today.getDate() && calendar.Selected.Month == calendar.Today.Month && calendar.Selected.Year == calendar.Today.Year) {
                day.className += " today";
            }
            days.appendChild(day);
        }
        // Next Month's Days
        // Always same amount of days in calander
        var extraDays = 13;
        if (days.children.length > 35) { extraDays = 6; }
        else if (days.children.length < 29) { extraDays = 20; }

        for (i = 0; i < (extraDays - calendar.Selected.LastDay); i++) {
            day = document.createElement("li");
            day.className += "cld-day nextMonth";

            number = DayNumber(i + 1);
            day.appendChild(number);

            days.appendChild(day);
        }
        mainSection.appendChild(days);
    }

    element.appendChild(mainSection);

    AddDateTime();
    AddLabels();
    AddDays();
}


// ===========
// calendar-demo.js
var events = [];

let baseurl = window.location.href;

let curdate = new Date();
let month = curdate.getMonth();
let year = curdate.getFullYear();
var element = document.getElementById("calendar");

/**
 * Create calendar
 * @param {Element} el 
 * @param {Event} data 
 */
function calendar(el, data) {
    var obj = new Calendar(data);
    createCalendar(obj, el);
}

function fetchEvents(month, year) {
    fetch(baseurl.replace("calendar", "main") + "/daily/" + (1 + month) + "/" + year).then(response => response.json()).then(data => {
        events = [];
        for (let i = 0; i < data.length; i++) {
            let newobj = {};
            newobj.Date = new Date(data[i].year + "-" + data[i].month + "-" + data[i].date);
            newobj.Title = data[i].title;
            newobj.Link = "main/daily/" + data[i].dailyId;
            events.push(newobj);
        }
        calendar(element, events);

    });
}

function fetchevents(month, year, calendar, element, adjuster) {
    fetch(baseurl.replace("calendar", "main") + "/daily/" + (1 + month) + "/" + year).then(response => response.json()).then(data => {
        events = [];
        for (let i = 0; i < data.length; i++) {
            let newobj = {};
            newobj.Date = new Date(data[i].year + "-" + data[i].month + "-" + data[i].date);
            newobj.Title = data[i].title;
            newobj.Link = "main/daily/" + data[i].dailyId;
            events.push(newobj);
        }
        var newcalendar = new Calendar(events, new Date(calendar.Selected.Year, month, 1));
        console.log("New Calendar Month (0 indexed): " + newcalendar.Selected.Month);

        createCalendar(newcalendar, element, adjuster);
    });
}

fetchEvents(month, year);

// create calendar
