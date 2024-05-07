document.addEventListener("DOMContentLoaded", function () {
    const pedidoButton = document.getElementById("pedido");
    const totalCostSpan = document.getElementById("totalCost");
    const comboNombreSpan = document.getElementById("comboNombre");

    pedidoButton.addEventListener("click", function () {
        const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
        let totalValue = 0;
        const selectedItems = [];

        checkboxes.forEach(function (checkbox) {
            totalValue += parseFloat(checkbox.value);
            const divContenedor = checkbox.parentElement;
            const comboNombre = divContenedor.getAttribute("data-nombre");
            selectedItems.push(comboNombre);
        });

        if (totalCostSpan) {
            totalCostSpan.textContent = totalValue.toFixed(3);
        }

        if (comboNombreSpan) {
            comboNombreSpan.textContent = selectedItems.join(", ");
        }

        const selectedItemsString = selectedItems.join(", ");
        const message = `Hola estoy interesado en un combo de: ${selectedItemsString}\nCosto Total: $${totalValue.toFixed(3)}`;

        // Abre una ventana de WhatsApp con el mensaje
        window.open(`https://wa.me/+573118587974/?text=${encodeURIComponent(message)}`, "_blank");
    });
});