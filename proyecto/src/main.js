const pantalla = document.getElementById("pantalla");

function agregar(valor) {
  if (pantalla.textContent === "0" && valor !== ".") {
    pantalla.textContent = valor;
  } else {
    pantalla.textContent += valor;
  }
}

function limpiar() {
  pantalla.textContent = "0";
}

function borrar() {
  pantalla.textContent = pantalla.textContent.slice(0, -1);
  if (pantalla.textContent === "") pantalla.textContent = "0";
}

function calcular() {
  try {
    pantalla.textContent = eval(pantalla.textContent
      .replace("÷", "/")
      .replace("×", "*"));
  } catch {
    pantalla.textContent = "Error";
  }
}
