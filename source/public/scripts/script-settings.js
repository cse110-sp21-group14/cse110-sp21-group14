var popup = document.getElementById("settingsBg");

function openSettings(){
    popup.style.display = "block";
}

function closeSettings(){
    popup.style.display = "none";
}

function changeFont(font){
    document.getElementById("popupTitle").style.fontFamily = font.value;
    document.getElementById("contains").style.fontFamily = font.value;
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}