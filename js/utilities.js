/**
 * Convert input value into number
 */
function getInputValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

/**
 * Convert text value into number
 */
function getTextValueById(id) {
  const numberText = parseFloat(document.getElementById(id).innerText);
  return numberText;
}

/**
 * Hide/Unhide
 */
const donateBtn = document.getElementById("donateBtn");
const historyBtn = document.getElementById("transactionBtn");

function unhide(id) {
  document.getElementById("donateSec").classList.add("hidden");
  document.getElementById("transactionSec").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

donateBtn.addEventListener("click", function () {
  unhide("donateSec");
  donateBtn.classList.add("bg-btnBg");
  historyBtn.classList.remove("bg-btnBg");
  historyBtn.classList.add("border", "btn-outline");
});

historyBtn.addEventListener("click", function () {
  unhide("transactionSec");
  historyBtn.classList.add("bg-btnBg");
  historyBtn.classList.remove("border", "btn-outline");
  donateBtn.classList.remove("bg-btnBg");
});

/**
 * Herder bg blur when scroll
 */

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.getElementById("nav1").style.boxShadow = "0 0 30px 15px #fffaefad";
  } else {
    document.getElementById("nav1").style.boxShadow = "0 0 0 0";
  }
});
