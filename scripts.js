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
const innerInput = document.getElementById("inner-input")

// Change color of inner box
function changeInnerColor() {
  innerCurrent = `rgb(${innerRed.value}, ${innerGreen.value}, ${innerBlue.value})`;
  innerBox.style.backgroundColor = innerCurrent;
  innerInput.setAttribute("placeholder", innerCurrent)
  
  // Update contrast
  textContrast = contrast(
    [textRed.value, textGreen.value, textBlue.value],
    [innerRed.value, innerGreen.value, innerBlue.value]
    );
    contrastElement.textContent = textContrast.toFixed(1);
  }
  
// Inner box color button copy text
const innerBtn = document.getElementById("inner-btn");
innerBtn.addEventListener("click", () => {
  // Create a text area to copy text from
  const textArea = document.createElement("textarea");
  textArea.value = innerCurrent;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  innerBtn.style.backgroundColor = "red";
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

  // Update contrast
  textContrast = contrast(
    [textRed.value, textGreen.value, textBlue.value],
    [innerRed.value, innerGreen.value, innerBlue.value]
  );
  contrastElement.textContent = textContrast.toFixed(1);
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

// Calculate luminance
function luminance(color) {
  color = color.map((el) => {
    el = el / 255;
    if (el <= 0.03928) {
      el = el / 12.92;
    } else {
      el = ((el + 0.055) / 1.055) ** 2.4;
    }
    return el;
  });
  return 0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2];
}

// Calculate contrast between text and its background
function contrast(color1, color2) {
  const luminance1 = luminance(color1) + 0.05;
  const luminance2 = luminance(color2) + 0.05;
  const ratio = (Math.max(luminance1, luminance2)) / (Math.min(luminance1, luminance2));
  return ratio;
}

let textContrast = contrast(
  [textRed.value, textGreen.value, textBlue.value],
  [innerRed.value, innerGreen.value, innerBlue.value]
);
const contrastElement = document.getElementById("calculated-contrast");
