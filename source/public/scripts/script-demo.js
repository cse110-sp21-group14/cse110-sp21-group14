var events = [
    { "Date": new Date(2021, 4, 7), "Title": "Today is my birthday.", "Link": "path/to/task/on/page/view/" },
    { "Date": new Date(2021, 4, 18), "Title": "CSE110 final project is due", "Link": "https://www.google.com/" },
    { "Date": new Date(2021, 4, 22), "Title": "Give me a task", "Link": "https://www.google.com/" },
];
// create calendar
var element = document.getElementById("calendar");
calendar(element, events);