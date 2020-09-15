// Outer colored box
const outerBox = document.getElementById("outer");

// Sliders for outer box
const outerRed = document.getElementById("outer-red");
const outerGreen = document.getElementById("outer-green");
const outerBlue = document.getElementById("outer-blue");

// Event listeners for outer box
outerRed.addEventListener("input", changeOuterColor);
outerGreen.addEventListener("input", changeOuterColor);
outerBlue.addEventListener("input", changeOuterColor);

// Current color
let outerCurrent = "rgb(0, 0, 0)";
const outerBtn = document.getElementById("outer-btn");

// Change color of outer box
function changeOuterColor() {
  outerCurrent = `rgb(${outerRed.value}, ${outerGreen.value}, ${outerBlue.value})`;
  outerBox.style.backgroundColor = outerCurrent;
  outerBtn.textContent = outerCurrent;
}

// Outer box color button copy text
outerBtn.addEventListener("click", () => {
  // Create a text area to copy text from
  const textArea = document.createElement("textarea");
  textArea.value = outerCurrent;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  outerBtn.textContent = "Copied";
});

// Inner colored box
const innerBox = document.getElementById("inner");

// Sliders for inner box
const innerRed = document.getElementById("inner-red");
const innerGreen = document.getElementById("inner-green");
const innerBlue = document.getElementById("inner-blue");

// Event listeners for inner box
innerRed.addEventListener("input", changeInnerColor);
innerGreen.addEventListener("input", changeInnerColor);
innerBlue.addEventListener("input", changeInnerColor);

// Current color
let innerCurrent = "rgb(255, 255, 255)";
const innerBtn = document.getElementById("inner-btn");

// Change color of inner box
function changeInnerColor() {
  innerCurrent = `rgb(${innerRed.value}, ${innerGreen.value}, ${innerBlue.value})`;
  innerBox.style.backgroundColor = innerCurrent;
  innerBtn.textContent = innerCurrent;
}

// Inner box color button copy text
innerBtn.addEventListener("click", () => {
  // Create a text area to copy text from
  const textArea = document.createElement("textarea");
  textArea.value = innerCurrent;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  innerBtn.textContent = "Copied";
});

// Inner text
const innerText = document.getElementById("inner-text");

// Sliders for text
const textRed = document.getElementById("text-red");
const textGreen = document.getElementById("text-green");
const textBlue = document.getElementById("text-blue");

// Event listeners for text
textRed.addEventListener("input", changeTextColor);
textGreen.addEventListener("input", changeTextColor);
textBlue.addEventListener("input", changeTextColor);

// Current color
let textCurrent = "rgb(0, 0, 0)";
const innerTextBtn = document.getElementById("inner-text-btn");

// Change color of inner box
function changeTextColor() {
  textCurrent = `rgb(${textRed.value}, ${textGreen.value}, ${textBlue.value})`;
  innerText.style.color = textCurrent;
  innerTextBtn.textContent = textCurrent;
}

// Copy text color
innerTextBtn.addEventListener("click", () => {
  // Create a text area to copy text from
  const textArea = document.createElement("textarea");
  textArea.value = textCurrent;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  innerTextBtn.textContent = "Copied";
});