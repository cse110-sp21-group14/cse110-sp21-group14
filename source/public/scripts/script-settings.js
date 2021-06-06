var popup = document.getElementById("settingsBg");

function openSettings(){
    popup.style.display = "block";
}

function closeSettings(){
    popup.style.display = "none";
}

function changeFont(font){
    document.getElementsByTagName("*").style.fontFamily = font.value;
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}