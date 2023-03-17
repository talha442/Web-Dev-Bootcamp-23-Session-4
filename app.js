// Change Date
function showDateTime() {
  document.getElementById("demo").innerHTML = Date();
}

// Change Text
function changeText() {
  document.getElementById("text").innerHTML = "This is Talha Faisal";
}

// Bulb On & Off Functions
function bulbOn() {
  document.getElementById("bulb").src = "./images/bulb-on.png";
}

function bulbOff() {
  document.getElementById("bulb").src = "./images/bulb-off.png";
}
