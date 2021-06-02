/**
 * @file This script runs on the front end (webpage) when the main page is loaded.
 *       This script should only run on the main page.
 * @author Yinxuan Du
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

let form = document.getElementById("monthForm");
let dailyContainer = document.getElementById("dailyContainer");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // accessing data from form
    let search = form.elements[0].value;

    if (search == "") {
        return;
    }

    let searchDetails = search.split("-");
    let year = parseInt(searchDetails[0]);
    let month = parseInt(searchDetails[1]);

    // getting the number of days in the month
    let daysInMonth = new Date(year,month,0).getDate();

    // clearing dailyContainer on new submission
    while (dailyContainer.firstChild) {
        dailyContainer.removeChild(dailyContainer.lastChild);
    }

    // populating with days
    for (let i = 1; i <= daysInMonth; i++) {
        let dailyItem = document.createElement("li");
        dailyItem.id = `${month}/${i}/${year}`;
        // dailyItem.className = Class name goes here;

        let itemParagraph = document.createElement("p");
        itemParagraph.innerText = `${month}/${i}/${year}`;

        let itemButton = document.createElement("button");
        itemButton.className = "dailyBtn";
        itemButton.innerHTML = `<a href="/main/add/daily/${month}/${i}/${year}">Add</a>`;

        // adding inner html of daily item
        dailyItem.appendChild(itemParagraph);
        dailyItem.appendChild(itemButton);
        // adding to container
        dailyContainer.appendChild(dailyItem);
    }

    // making a fetch request and updating HTML
    await fetch(document.location.origin + document.location.pathname + `/daily/${month}/${year}`).then(response => response.json()).then((dailies) => {
        // updating each of the daily items that are found in the database
        dailies.forEach((daily) => {
            let dailyItem = document.getElementById(`${daily.month}/${daily.date}/${daily.year}`);
            let itemParagraph = dailyItem.firstElementChild;
            let itemButton = dailyItem.lastElementChild;

            // updating HTML with database info
            itemParagraph.innerText = `${daily.month}/${daily.date}/${daily.year}: ${daily.title}`;
            itemButton.innerHTML = `<a href="/main/daily/${daily.dailyId}">Edit</a>`;

            // adding delete btn
            let deleteBtn = document.createElement("button");
            deleteBtn.className = "dailyBtn";
            deleteBtn.innerText = "Delete";

            deleteBtn.addEventListener('click', async () => {
                let xhr = new XMLHttpRequest();
                xhr.open("DELETE", document.location.origin +`/main/daily/${daily.month}/${daily.date}/${daily.year}`, true);
                xhr.send(null);
                location.reload();
            });
            
            dailyItem.appendChild(deleteBtn);
        });
    });
});