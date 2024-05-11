//funcion para todas las redirecciones de compra

document.addEventListener("DOMContentLoaded", function() {
  const botones = document.querySelectorAll('.button-buy');

  botones.forEach(boton => {
    if (boton.id !== 'open') {
      boton.addEventListener('click', () => {
        const servicio = boton.id;
        const message = `Hola, estoy interesado en una suscripción de ${servicio}.`; // Mensaje sin costo

        window.open(`https://wa.me/+573118587974/?text=${encodeURIComponent(message)}`, "_blank");
      });
    }
  });
});

//Pagina de Ventas
document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("boton_ven");
  boton.onclick = function() {
    window.open("../venta_cuentas_tiendas/index_ventas.html", "_blank");
  };
});
 //Whatsapp
 document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("whatsapp");
  boton.onclick = function() {
    window.open("https://wa.link/rz5k3r", "_blank");
  };
});
//Facebook
 document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("");
  boton.onclick = function() {
    window.open("https://www.facebook.com/sheer.it/", "_blank");
  };
});

