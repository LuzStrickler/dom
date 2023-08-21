document.addEventListener("DOMContentLoaded", function () {
    var parrafos = document.getElementsByTagName("p");
    
    for (var i = 0; i < parrafos.length; i++) {
      parrafos[i].style.color = "red";
    }
  });
  