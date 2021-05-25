/**
 * Filename: script-main.js
 * Author: Yinxuan Du
 * Date: May 17th
 * Purpose: This script runs on the front end (webpage) when the main page is loaded.
 *          This script should only run on the main page.
 */

let journals = Array.from(document.getElementsByClassName("journal-item"));

journals.forEach(function (journal) {
    let spanSelector = journal.querySelector("span");
    let ulSelector = journal.querySelector("ul");
    // console.log(spanSelector);

    spanSelector.addEventListener("click", (event) => {
        event.preventDefault();
        if (!ulSelector.hidden) {
            ulSelector.hidden = true;
            spanSelector.innerHTML = "&#8227";
        } else {
            ulSelector.hidden = false;
            spanSelector.innerHTML = "&#9662";
        }
        
    }, false);
});
