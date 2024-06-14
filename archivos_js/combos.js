// combos.js
var calcularCostoGlobal; // Definimos una variable global que contendrá la función

document.addEventListener("DOMContentLoaded", function () {
  const ventana_contenedor = document.getElementById("ventana_contenedor");
  const open = document.getElementById("open");
  const abra = document.getElementById("abra");
  const close = document.getElementById("close");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  abra.addEventListener("click", () => {
    ventana_contenedor.classList.add("show");
  });
  open.addEventListener("click", () => {
    ventana_contenedor.classList.add("show");
  });
  close.addEventListener("click", () => {
    ventana_contenedor.classList.remove("show");
  });

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      calcularCosto(); // Llama a la función para calcular el costo
    });
  });

  function calcularCosto() {
    let costoTotal = 0;
    let cantidadSeleccionada = 0;
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        costoTotal += parseFloat(checkbox.value);
        cantidadSeleccionada++;
      }
    });

    if (cantidadSeleccionada > 1) {
      costoTotal -= (cantidadSeleccionada - 1); // Aplica el descuento
    }

    const costoElement = document.querySelector(".costo");
    costoElement.textContent = "Costo: $" + costoTotal.toFixed(3);
  }

  // Asignamos la función a la variable global
  calcularCostoGlobal = calcularCosto;
});
