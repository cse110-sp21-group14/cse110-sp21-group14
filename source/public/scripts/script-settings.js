var popup = document.getElementById("settingsBg");

function openSettings(){
    popup.style.display = "block";
}

function closeSettings(){
    popup.style.display = "none";
}

function changeFont(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("txt").style.fontSize = listValue;
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}