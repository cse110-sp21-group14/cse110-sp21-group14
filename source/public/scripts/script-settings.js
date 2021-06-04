/* eslint-disable */
function changeFont(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("txt").style.fontSize = listValue;
}

function toggledarkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}