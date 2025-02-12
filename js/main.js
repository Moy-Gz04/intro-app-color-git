// Obtaining references to DOM elements
const redRange = document.getElementById("red-range");
const greenRange = document.getElementById("green-range");
const blueRange = document.getElementById("blue-range");
const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");
const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");
const colorBox = document.getElementById("color-box");
const hexValue = document.getElementById("hex-value");
const colorPicker = document.getElementById("color-picker");
const copyButton = document.getElementById("copy-btn");
const themeToggleButton = document.getElementById("theme-toggle");
const redCircle = document.getElementById("red-circle");
const greenCircle = document.getElementById("green-circle");
const blueCircle = document.getElementById("blue-circle");

// Function to update the color box and display the hex value
function updateColor() {
  const red = parseInt(redRange.value);
  const green = parseInt(greenRange.value);
  const blue = parseInt(blueRange.value);

  // Update displayed RGB values
  redValue.textContent = red;
  greenValue.textContent = green;
  blueValue.textContent = blue;
  redInput.value = red;
  greenInput.value = green;
  blueInput.value = blue;

  // Update circles with respective color
  redCircle.style.backgroundColor = `rgb(${red}, 0, 0)`;
  greenCircle.style.backgroundColor = `rgb(0, ${green}, 0)`;
  blueCircle.style.backgroundColor = `rgb(0, 0, ${blue})`;

  // Update color box and hex value
  colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  hexValue.value = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

// Function to update the values when using input fields
function updateInputs() {
  redRange.value = redInput.value;
  greenRange.value = greenInput.value;
  blueRange.value = blueInput.value;

  updateColor();
}

// Event listeners for range inputs
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

// Event listeners for number inputs
redInput.addEventListener("input", updateInputs);
greenInput.addEventListener("input", updateInputs);
blueInput.addEventListener("input", updateInputs);

// Event listener for color picker
colorPicker.addEventListener("input", (e) => {
  const hex = e.target.value;
  const rgb = hexToRgb(hex);
  redRange.value = rgb.r;
  greenRange.value = rgb.g;
  blueRange.value = rgb.b;
  updateColor();
});

// Function to convert hex to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Function to copy the hex value to clipboard
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.value);
  alert("Hex value copied to clipboard!");
});

// Theme toggle functionality
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  feather.replace(); // Reinitialize icons
});

// Initial call to set up the default color
updateColor();
