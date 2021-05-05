// script.js

let img = new Image(); // used to load image from <input> and draw to canvas
//img = document.getElementById('image-input');
//img.src = "images/lab.jpg"
//img.src = "images/sky.jpg"

let canvas = document.querySelector('canvas'); // get canvas
let ctx = canvas.getContext('2d');    // get the display of user image
let dimInfo;
let textTop, textBottom;

let input = document.getElementById('image-input');

// text top, text botth
let topInput = document.getElementById('text-top');
let bottomInput = document.getElementById('text-bottom');

// form
let form = document.querySelector('form');

// Generate, Clear, Read Text buttons
let generateButton = document.querySelector("button");
let clearButton = document.getElementById("button-group").querySelectorAll("button")[0];
let readtextButton = document.getElementById("button-group").querySelectorAll("button")[1];

generateButton.disabled = true;
clearButton.disabled = true;
readtextButton.disabled = true;

// Voice Selector
let voiceSelector = document.querySelector("select");
let voices; // all available voices
console.log("voiceSelector");
console.log(voiceSelector);

// Volume Icon, Volume Input
let volumeIcon = document.getElementById("volume-group").querySelector("img");
let volumeInput = document.getElementById("volume-group").querySelector("input");



// Fires whenever the img object loads a new image (such as with img.src =)
img.addEventListener('load', () => {
  // TODO
  console.log('start loading');
  
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // fill in black to uncovered area
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // load new image
  dimInfo = getDimensions(canvas.width, canvas.height, img.width, img.height);
  console.log(dimInfo);  // appropriate image size to fit in the canvas
  ctx.drawImage(img, dimInfo.startX, dimInfo.startY, dimInfo.width, dimInfo.height);

  // turn on "Generate" button
  // turn off "Clear" and "Read Text" buttons
  // turn off "Voice Selector"
  generateButton.disabled = false;
  clearButton.disabled = true;
  readtextButton.disabled = true;
  voiceSelector.disabled = true;


  // Some helpful tips:
  // - Fill the whole Canvas with black first to add borders on non-square images, then draw on top
  // - Clear the form when a new image is selected
  // - If you draw the image to canvas here, it will update as soon as a new image is selected
});

// Load the image to canvas (image-input::change)
input.addEventListener('change', (event) => {
    console.log('NEW photo: ' + URL.createObjectURL(event.target.files[0]));
    img.src = URL.createObjectURL(event.target.files[0]);
   // img.src = event.target.value;
});

topInput.addEventListener('change', (event) => {
    event.preventDefault();
    console.log("current img:" + img.src);
    if (img.src != '') generateButton.disabled = false;
});

bottomInput.addEventListener('change', (event) => {
    event.preventDefault();
    if (img.src != '') generateButton.disabled = false;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // fill in black to uncovered area
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // load new image
  dimInfo = getDimensions(canvas.width, canvas.height, img.width, img.height);
  console.log(dimInfo);  // appropriate image size to fit in the canvas
  ctx.drawImage(img, dimInfo.startX, dimInfo.startY, dimInfo.width, dimInfo.height);

  // write texts
  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  // text
  textTop = document.getElementById("text-top").value;
  textBottom = document.getElementById("text-bottom").value;
  ctx.fillText(textTop, canvas.width/2 , dimInfo.startY / 2);
  ctx.fillText(textBottom, canvas.width/2 , canvas.height - dimInfo.startY / 2);

  // turn off "Generate" button
  // turn on "Clear" and "Read Text" buttons
  // turn off "Voice Selector"
  generateButton.disabled = true;
  clearButton.disabled = false;
  readtextButton.disabled = false;
  voiceSelector.disabled = false;
});

clearButton.addEventListener('click', (event) => {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  img.src = '';

  event.preventDefault();
  generateButton.disabled = true;
  clearButton.disabled = true;
  readtextButton.disabled = true;
});

// Read text if clicked
readtextButton.addEventListener('click', (event) => {
    console.log('handling voice selector!');
    event.preventDefault();

    var selectedVoice = voiceSelector.options[voiceSelector.selectedIndex].text
    
    console.log("Voice: " + selectedVoice);

    var utterThis = new SpeechSynthesisUtterance(textTop + ". " + textBottom);
    //console.log("Utter voice: " + utterThis.voice);
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name + ' (' + voices[i].lang + ')' == selectedVoice) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.volume = volumeInput.value / 100; // fit volumn in range [0, 1]
    speechSynthesis.speak(utterThis);
});

// get populate voice list and insert to Voice Selector
speechSynthesis.addEventListener("voiceschanged", () => {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  console.log("start getting voice list");
  voiceSelector.remove(voiceSelector.selectedIndex);
  //noneOption.selected = false;

  voices = speechSynthesis.getVoices();
  //console.log("voices.length: " + voices.length);
  //console.log(voices);

  for(var i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelector.appendChild(option);
  }
});

volumeInput.addEventListener("input", () => {
    console.log("volume input: " + volumeInput.value);
    /*
    volume-level-3: 67-100
    volume-level-2: 34-66
    volume-level-1: 1-33
    volume-level-0: 0*/
    var volumnLevel = volumeInput.value;
    if (volumnLevel == 0) {
      volumeIcon.src = "icons/volume-level-0.svg";
      volumeIcon.alt = "Volume Level 0";
    } else if (volumnLevel <= 33) {
      volumeIcon.src = "icons/volume-level-1.svg";
      volumeIcon.alt = "Volume Level 1";
    } else if (volumnLevel <= 66) {
      volumeIcon.src = "icons/volume-level-2.svg";
      volumeIcon.alt = "Volume Level 2";
    } else {
      volumeIcon.src = "icons/volume-level-3.svg";
      volumeIcon.alt = "Volume Level 3";
    }
}, false);

/**
 * Takes in the dimensions of the canvas and the new image, then calculates the new
 * dimensions of the image so that it fits perfectly into the Canvas and maintains aspect ratio
 * @param {number} canvasWidth Width of the canvas element to insert image into
 * @param {number} canvasHeight Height of the canvas element to insert image into
 * @param {number} imageWidth Width of the new user submitted image
 * @param {number} imageHeight Height of the new user submitted image
 * @returns {Object} An object containing four properties: The newly calculated width and height,
 * and also the starting X and starting Y coordinate to be used when you draw the new image to the
 * Canvas. These coordinates align with the top left of the image.
 */
function getDimensions(canvasWidth, canvasHeight, imageWidth, imageHeight) {
  let aspectRatio, height, width, startX, startY;

  // Get the aspect ratio, used so the picture always fits inside the canvas
  aspectRatio = imageWidth / imageHeight;

  // If the apsect ratio is less than 1 it's a verical image
  if (aspectRatio < 1) {
    // Height is the max possible given the canvas
    height = canvasHeight;
    // Width is then proportional given the height and aspect ratio
    width = canvasHeight * aspectRatio;
    // Start the Y at the top since it's max height, but center the width
    startY = 0;
    startX = (canvasWidth - width) / 2;
    // This is for horizontal images now
  } else {
    // Width is the maximum width possible given the canvas
    width = canvasWidth;
    // Height is then proportional given the width and aspect ratio
    height = canvasWidth / aspectRatio;
    // Start the X at the very left since it's max width, but center the height
    startX = 0;
    startY = (canvasHeight - height) / 2;
  }

  return { 'width': width, 'height': height, 'startX': startX, 'startY': startY }
}