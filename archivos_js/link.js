// link.js
document.addEventListener("DOMContentLoaded", function () {
    const pedidoButton = document.getElementById("pedido");
    const totalCostSpan = document.getElementById("totalCost");
    const comboNombreSpan = document.getElementById("comboNombre");

    pedidoButton.addEventListener("click", function () {
        if (typeof calcularCostoGlobal === 'function') { // Verifica que la función esté definida
            calcularCostoGlobal(); // Llamamos a la función definida globalmente
        }
        const costoElement = document.querySelector(".costo"); // Asumimos que esto fue actualizado
        const totalCost = parseFloat(costoElement.textContent.replace('Costo: $', ''));

        const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
        const selectedItems = [];

        checkboxes.forEach(function (checkbox) {
            const divContenedor = checkbox.parentElement;
            const comboNombre = divContenedor.getAttribute("data-nombre");
            selectedItems.push(comboNombre);
        });

        if (totalCostSpan) {
            totalCostSpan.textContent = totalCost.toFixed(3);
        }

        if (comboNombreSpan) {
            comboNombreSpan.textContent = selectedItems.join(", ");
        }

        const selectedItemsString = selectedItems.join(", ");
        const message = `Hola estoy interesado en un suscripción de: ${selectedItemsString}\nCosto Total: $${totalCost.toFixed(3)}`;

        window.open(`https://wa.me/+573118587974/?text=${encodeURIComponent(message)}`, "_blank");
    });
});
