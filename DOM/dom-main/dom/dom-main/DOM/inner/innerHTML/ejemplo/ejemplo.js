function crearEnlaces() {
    let ob1 = document.getElementById("enlaces1")
    ob1.innerHTML = `<a href="${document.getElementById('text1').value}">Enlace 1</a> 
    <br><a href="${document.getElementById('text2').value}">Enlace 2</a>`
}