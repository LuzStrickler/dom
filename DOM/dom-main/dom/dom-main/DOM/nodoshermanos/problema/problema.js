document.addEventListener("DOMContentLoaded", function () {
    var celda1 = document.getElementById("celda1");
    var celdasFila1 = celda1.parentNode.childNodes;
  
    for (var i = 0; i < celdasFila1.length; i++) {
      if (celdasFila1[i].nodeName === "TD") {
        var nodoTexto = celdasFila1[i].firstChild;
        alert(nodoTexto.nodeValue);
      }
    }
  });
  