document.addEventListener("DOMContentLoaded", function () {
  const open = document.getElementById("open");
  const abra = document.getElementById("abra");
  const ventana_contenedor = document.getElementById("ventana_contenedor");
  const close = document.getElementById("close");

  abra.addEventListener("click", () => {
    ventana_contenedor.classList.add("show");
  });
  open.addEventListener("click", () => {
    ventana_contenedor.classList.add("show");
  });

  close.addEventListener("click", () => {
    ventana_contenedor.classList.remove("show");
  });

  // Obtén todos los elementos de tipo checkbox
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Agrega un evento change a cada checkbox
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      calcularCosto(); // Llama a la función para calcular el costo
    });
  });

  // Función para calcular el costo
  function calcularCosto() {
    let costoTotal = 0;
    let cantidadSeleccionada = 0; // Contador para la cantidad de checkboxes seleccionados

    // Itera a través de los checkboxes y suma los valores seleccionados
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        // Convierte el valor del checkbox a un número y súmalo al costo total
        costoTotal += parseFloat(checkbox.value);
        cantidadSeleccionada++; // Incrementa la cantidad de checkboxes seleccionados
      }
    });

    // Aplica el descuento si hay más de un checkbox seleccionado
    if (cantidadSeleccionada > 1) {
      costoTotal -= (cantidadSeleccionada - 1) * 1000; // Resta $1000 por cada checkbox adicional seleccionado
    }

    // Actualiza el elemento con clase "costo" con el costo total
    const costoElement = document.querySelector(".costo");
    costoElement.textContent = "Costo: $" + costoTotal.toFixed(3); // Muestra el costo con tres decimales
  }
});

