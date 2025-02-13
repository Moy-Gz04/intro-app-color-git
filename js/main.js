// =============================
// 🎨 Herramienta de Selección de Color
// =============================

// 📌 Obtención de referencias a elementos del DOM
const redRange = document.getElementById("red-range"); // Control deslizante para rojo
const greenRange = document.getElementById("green-range"); // Control deslizante para verde
const blueRange = document.getElementById("blue-range"); // Control deslizante para azul
const redInput = document.getElementById("red-input"); // Campo numérico para rojo
const greenInput = document.getElementById("green-input"); // Campo numérico para verde
const blueInput = document.getElementById("blue-input"); // Campo numérico para azul
const redValue = document.getElementById("red-value"); // Texto que muestra el valor de rojo
const greenValue = document.getElementById("green-value"); // Texto que muestra el valor de verde
const blueValue = document.getElementById("blue-value"); // Texto que muestra el valor de azul
const colorBox = document.getElementById("color-box"); // Caja de muestra del color
const hexValue = document.getElementById("hex-value"); // Campo de texto con el código hexadecimal
const colorPicker = document.getElementById("color-picker"); // Selector de color tipo input
const copyButton = document.getElementById("copy-btn"); // Botón para copiar el código hexadecimal
const themeToggleButton = document.getElementById("theme-toggle"); // Botón para cambiar el tema
const redCircle = document.getElementById("red-circle"); // Indicador del color rojo
const greenCircle = document.getElementById("green-circle"); // Indicador del color verde
const blueCircle = document.getElementById("blue-circle"); // Indicador del color azul

// =============================
// 🎨 Función para actualizar la caja de color y el valor hexadecimal
// =============================
function updateColor() {
  // Obtiene los valores actuales de los controles de color
  const red = parseInt(redRange.value);
  const green = parseInt(greenRange.value);
  const blue = parseInt(blueRange.value);

  // Actualiza los valores numéricos visibles en la interfaz
  redValue.textContent = red;
  greenValue.textContent = green;
  blueValue.textContent = blue;
  redInput.value = red;
  greenInput.value = green;
  blueInput.value = blue;

  // Cambia el color de los círculos indicadores de cada canal RGB
  redCircle.style.backgroundColor = `rgb(${red}, 0, 0)`;
  greenCircle.style.backgroundColor = `rgb(0, ${green}, 0)`;
  blueCircle.style.backgroundColor = `rgb(0, 0, ${blue})`;

  // Aplica el nuevo color a la caja de muestra
  colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // Convierte los valores RGB a hexadecimal y lo muestra en el campo de texto
  hexValue.value = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

// =============================
// 🎯 Función para actualizar valores cuando se modifican los campos numéricos
// =============================
function updateInputs() {
  // Sincroniza los controles deslizantes con los valores numéricos ingresados
  redRange.value = redInput.value;
  greenRange.value = greenInput.value;
  blueRange.value = blueInput.value;

  updateColor(); // Actualiza la visualización del color
}

// =============================
// 🎛 Eventos para actualizar el color cuando se ajustan los sliders
// =============================
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

// =============================
// 🔢 Eventos para actualizar el color cuando se modifican los valores numéricos
// =============================
redInput.addEventListener("input", updateInputs);
greenInput.addEventListener("input", updateInputs);
blueInput.addEventListener("input", updateInputs);

// =============================
// 🎨 Conversión de código hexadecimal a RGB
// =============================
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16); // Extrae y convierte el valor de rojo
  const g = parseInt(hex.slice(3, 5), 16); // Extrae y convierte el valor de verde
  const b = parseInt(hex.slice(5, 7), 16); // Extrae y convierte el valor de azul
  return { r, g, b }; // Devuelve un objeto con los valores RGB
}

// =============================
// 🎨 Evento para seleccionar color con el selector y actualizar la interfaz
// =============================
colorPicker.addEventListener("input", (e) => {
  const hex = e.target.value; // Obtiene el valor hexadecimal seleccionado
  const rgb = hexToRgb(hex); // Convierte el hexadecimal a RGB

  // Asigna los valores RGB obtenidos a los controles deslizantes
  redRange.value = rgb.r;
  greenRange.value = rgb.g;
  blueRange.value = rgb.b;

  updateColor(); // Aplica los cambios
});

// =============================
// 📋 Función para copiar el valor hexadecimal al portapapeles
// =============================
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.value); // Copia el texto al portapapeles
  alert("¡Código hexadecimal copiado al portapapeles!"); // Muestra una alerta de confirmación
});

// =============================
// 🌙 Alternar tema oscuro/claro
// =============================
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode"); // Alterna la clase para cambiar el tema
  feather.replace(); // Reinicializa los íconos de Feather para mantenerlos actualizados
});

// =============================
// 🔄 Configuración inicial de la caja de color al cargar la página
// =============================
updateColor();
