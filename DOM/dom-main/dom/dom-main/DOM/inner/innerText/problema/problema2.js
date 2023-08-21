function puntoFinal() {
    let lista = document.getElementById("lista")
    let obj = lista.firstElementChild
    while (obj != null) {
        obj.innerText = obj.innerText + "."
        obj = obj.nextElementSibling
    }
}