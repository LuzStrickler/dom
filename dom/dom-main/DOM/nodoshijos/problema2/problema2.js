document.addEventListener("DOMContentLoaded", function () {
    var miDiv = document.getElementById("miDiv");
    var ultimoHijo = miDiv.lastElementChild;
    var parrafoActual = ultimoHijo;
  
    while (parrafoActual) {
      console.log(parrafoActual.textContent);
      parrafoActual = parrafoActual.previousElementSibling;
    }
  });
  