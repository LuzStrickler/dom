function crearLista() {
    const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
    let cadena = ""
    for (let dia of dias)
        cadena += `<li>${dia}</li>`
    document.getElementById("lista").innerHTML = cadena
}