/**
 * Changes the font of the app
 * @function
 * @param {selectTag} the selection made
 */
function changeFont(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("txt").style.fontSize = listValue;
  }

/**
 * Changes the background of the app
 * @function
 */
function toggledarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
